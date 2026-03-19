import { createHash } from "node:crypto";
import { parse } from "node:path";
import { AnnouncementModel } from "@mvsi/database/models/Announcement";
import { ObjectId } from "@mvsi/database/papr";
import sharp from "sharp";
import type {
  AddAnnouncementFormData,
  EditAnnouncementFormData,
} from "@/routes/admin/announcements/$announcementId";
import { logger } from "../../../../../packages/logger";
import { storageClient } from "./storage";

export async function getAnnouncement(id: string) {
  const projection = {
    "data.largeImage.md5_checksum": 0,
    "data.smallImage.md5_checksum": 0,
  } as const;
  const announcement = await AnnouncementModel.findById(ObjectId.createFromHexString(id), {
    projection,
  });
  if (!announcement) {
    return null;
  }
  return {
    id: announcement._id.toHexString(),
    title: announcement.data.title,
    description: announcement.data.description,
    display_in_modal: announcement.data.display_in_modal,
    priority: announcement.data.priority,
    featured: announcement.data.featured,
    thumbnailTitle: announcement.data.titleSmall,
    image: announcement.data.largeImage.url,
    previewImage: announcement.data.smallImage.url,
    start_at: announcement.start_at,
    end_at: announcement.end_at,
  };
}

export async function getAnnouncements() {
  const projection = {
    "data.largeImage.md5_checksum": 0,
    "data.smallImage.md5_checksum": 0,
  } as const;
  const announcements = await AnnouncementModel.find(
    {},
    {
      projection,
    },
  );
  return announcements.map((a) => {
    return {
      id: a._id.toHexString(),
      title: a.data.title,
      description: a.data.description,
      display_in_modal: a.data.display_in_modal,
      priority: a.data.priority,
      featured: a.data.featured,
      thumbnailTitle: a.data.titleSmall,
      image: a.data.smallImage.url,
      start_at: a.start_at,
      end_at: a.end_at,
    };
  });
}

export async function addAnnoucement(data: AddAnnouncementFormData) {
  const rawFile = parse(data.key);
  const url = `${storageClient.config.endpoint}/${storageClient.config.bucketName}/${data.key}`;
  const imageBuffers = await resizeAndUploadToS3(url);
  if (imageBuffers) {
    const largeImagKey = rawFile.name;
    const thumbnailKey = `${rawFile.name}-thumbnail`;
    const thumbnailUploadResult = await storageClient.addFileFromBuffer({
      buffer: imageBuffers.resizedBuffer,
      targetPath: thumbnailKey,
    });
    if (!thumbnailUploadResult.error) {
      const thumbnailUrl = `${storageClient.config.endpoint}/${storageClient.config.bucketName}/${thumbnailKey}`;
      await AnnouncementModel.insertOne({
        largeImageKey: largeImagKey,
        smallImageKey: thumbnailKey,
        start_at: data.start_at,
        end_at: data.end_at,
        data: {
          title: data.title,
          titleSmall: data.thumbnailTitle,
          description: data.description,
          display_in_modal: data.display_in_modal,
          featured: data.featured,
          priority: data.priority,
          largeImage: {
            key: largeImagKey,
            md5_checksum: createHash("md5")
              .update(Buffer.from(imageBuffers.originalBuffer))
              .digest("hex"),
            url,
            file_size: imageBuffers.originalBuffer.byteLength,
          },
          smallImage: {
            key: thumbnailKey,
            url: thumbnailUrl,
            md5_checksum: createHash("md5")
              .update(Buffer.from(imageBuffers.resizedBuffer))
              .digest("hex"),
            file_size: imageBuffers.resizedBuffer.byteLength,
          },
        },
      });
    }
  }
}

export async function editAnnouncement(data: EditAnnouncementFormData) {
  await AnnouncementModel.findOneAndUpdate(
    { _id: ObjectId.createFromHexString(data.id) },
    {
      $set: {
        "data.title": data.title,
        "data.titleSmall": data.thumbnailTitle,
        start_at: data.start_at,
        end_at: data.end_at,
        "data.featured": data.featured,
        "data.priority": data.priority,
        "data.display_in_modal": data.display_in_modal,
        "data.description": data.description,
      },
    },
  );
}

export async function deleteAnnouncement(id: string) {
  const deleted = await AnnouncementModel.findOneAndDelete({
    _id: ObjectId.createFromHexString(id),
  });
  if (deleted) {
    const largeImageKey = `${storageClient.config.endpoint}/${storageClient.config.bucketName}/${deleted.largeImageKey}`;
    const smallImageKey = `${storageClient.config.endpoint}/${storageClient.config.bucketName}/${deleted.smallImageKey}`;
    await Promise.all([
      storageClient.removeFile(largeImageKey),
      storageClient.removeFile(smallImageKey),
    ]);
  }
}

async function resizeAndUploadToS3(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Fetch failed: ${response.statusText}`);

    const arrayBuffer = await response.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    const resizedBuffer = await sharp(inputBuffer).resize({ width: 786 }).toBuffer();

    return { originalBuffer: arrayBuffer, resizedBuffer };
  } catch (error) {
    logger.error(error);
  }
}
