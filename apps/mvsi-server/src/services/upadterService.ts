import { ConfigDataModel } from "@mvsi/database/models/Config";
import { FileModel } from "@mvsi/database/models/Files";

export async function getFilesForClient(clientVersion: number) {
  const config = await ConfigDataModel.findOne({});

  if (!config) {
    return [];
  }

  const latestServerVersion = config.VERSION;

  // Client is up to date
  if (clientVersion >= latestServerVersion) {
    return [];
  }

  // 2. Find the latest "new" file that is > clientVersion and <= serverVersion
  const latestNewFile = await FileModel.findOne(
    {
      type: "new",
      version: { $gt: clientVersion, $lte: latestServerVersion },
    },
    { sort: [["version", -1]] },
  );

  const files: string[] = [];

  if (latestNewFile) {
    // Add the latest "new" file
    files.push(latestNewFile.url);

    // If the "new" file version is less than server version,
    // get all patches from (newFileVersion + 1) to serverVersion
    if (latestNewFile.version < latestServerVersion) {
      const patches = await FileModel.find(
        {
          version: { $gt: latestNewFile.version, $lte: latestServerVersion },
        },
        { sort: [["version", 1]] },
      );

      files.push(...patches.map((p) => p.url));
    }
  } else {
    // No "new" file found, get all files from (clientVersion + 1) to serverVersion
    const allFiles = await FileModel.find(
      {
        version: { $gt: clientVersion, $lte: latestServerVersion },
      },
      { sort: [["version", 1]] },
    );

    files.push(...allFiles.map((p) => p.url));
  }

  return files;
}
