
import { ConfigDataModel } from "@mvsi/database/models/Config";
import { type FileDocument, FileModel } from "@mvsi/database/models/Files";
import papr, { client } from "@mvsi/database/papr";
import { env } from "@mvsi/env";
import { storageClient } from "./storage";
export async function getVersions() {
  const currentVersion = await ConfigDataModel.findOne(
    {},
    { projection: { VERSION: 1 } },
  );

  const versions = (await FileModel.find({})).sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
  return {
    currentVersion: currentVersion?.VERSION || 100000,
    versions: versions.map((v) => {
      return { ...v, _id: v._id.toHexString() };
    }),
  };
}



type ConfirmUpload = {
  filename: string;
  fileSize: number;
  type: string;
  uploaded_by: string;
};
export async function confirmFileUpload(data: ConfirmUpload) {
  const url = `${storageClient.config.endpoint}/${storageClient.config.bucketName}/${data.filename}`;
  const session = client.startSession();
  try {
    await session.withTransaction(async () => {
      const config = await ConfigDataModel.findOneAndUpdate(
        {},
        {
          $inc: { VERSION: 1 },
        },
        {
          returnDocument: "after",
          session: session,
        },
      );

      if (!config) {
        return;
      }
      await FileModel.insertOne({
        version: config.VERSION,
        url: url,
        filename: data.filename,
        type: data.type,
        uploaded_by: data.uploaded_by,
        size: data.fileSize,
      });
      await cleanupFilesOnNewUpload();
    });
  } finally {
    await session.endSession();
  }

  return true;
}

export async function cleanupFilesOnNewUpload() {
  const keysToDelete: string[] = [];

  // 1. Get all "new" files sorted by version descending
  const newFiles = await FileModel.find(
    { type: "new" },
    { sort: [["version", -1]] },
  );

  if (newFiles.length === 0) {
    return keysToDelete;
  }

  const maxNewFilesToKeep = 3;

  // 2. If we have too many "new" files, delete old ones and everything before them
  if (newFiles.length > maxNewFilesToKeep) {
    const oldestNewFileToKeep = newFiles[maxNewFilesToKeep - 1];

    // Get files to delete and collect URLs
    const filesToDelete = await FileModel.find({
      version: { $lt: oldestNewFileToKeep.version },
    });

    keysToDelete.push(...filesToDelete.map((f) => f.filename));

    // Delete from DB
    const deleteResult = await FileModel.deleteMany({
      version: { $lt: oldestNewFileToKeep.version },
    });

    console.log(
      `Deleted ${deleteResult.deletedCount} obsolete files older than v${oldestNewFileToKeep.version}`,
    );

    // Update our list after deletion
    newFiles.splice(maxNewFilesToKeep);
  }

  // 3. Delete redundant patches BETWEEN "new" files
  for (let i = 0; i < newFiles.length - 1; i++) {
    const newerNewFile = newFiles[i];
    const olderNewFile = newFiles[i + 1];

    // Get patches to delete and collect URLs
    const patchesToDelete = await FileModel.find({
      type: "patch",
      version: { $gt: olderNewFile.version, $lt: newerNewFile.version },
    });

    if (patchesToDelete.length > 0) {
      keysToDelete.push(...patchesToDelete.map((f) => f.url));

      // Delete from DB
      const deleteResult = await FileModel.deleteMany({
        type: "patch",
        version: { $gt: olderNewFile.version, $lt: newerNewFile.version },
      });

      console.log(
        `Deleted ${deleteResult.deletedCount} redundant patches between v${olderNewFile.version} and v${newerNewFile.version}`,
      );
    }
  }
  const promiseDelete = [];
  for (const fileName of keysToDelete) {
    promiseDelete.push(
      storageClient.removeFile(env.STORAGE_BUCKET_NAME!, fileName),
    );
  }
  try {
    await Promise.all(promiseDelete);
  } catch (e) {
    console.log(e);
  }
}
