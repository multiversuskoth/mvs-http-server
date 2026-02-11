import { type AnnouncementDocument, AnnouncementModel } from "@mvsi/database/models/Announcement";
import { logger } from "@mvsi/logger";
import type { PaprFilter } from "papr";
import { MVSTime } from "../../utils/date";

async function getSplashScreenAnnouncementEvents() {
  const announcements = await AnnouncementModel.find({});
  const events = announcements.map((announcement) => {
    return {
      start_at: { _hydra_unix_date: MVSTime(announcement.start_at) },
      end_at: announcement.end_at ? { _hydra_unix_date: MVSTime(announcement.end_at) } : null,
      entry: {
        name: announcement._id.toHexString(),
        calendar_type_slug: "carousel",
      },
      data: {
        featured: announcement.data.featured,
        display_in_modal: announcement.data.display_in_modal,
        description: { localizations: { random1: announcement.data.description } },
        priority: announcement.data.priority,
        slug: "",
        title: { localizations: { not_needed: announcement.data.title } },
        titleSmall: { localizations: { not_needed: announcement.data.titleSmall } },
        smallImage: announcement.smallImageKey,
        largeImage: announcement.largeImageKey,

        disabled: false,
        state: "running",
        event_type: "carousel-entry",
      },
    };
  });
  return events;
}

async function getAnnouncementImagesFileStorage() {
  const announcements = await AnnouncementModel.find({});
  const file_storage_images: any[] = [];
  announcements.forEach((announcement) => {
    file_storage_images.push({
      slug: announcement.largeImageKey,
      name: announcement.largeImageKey,
      created_at: { _hydra_unix_date: MVSTime(announcement.createdAt) },
      updated_at: { _hydra_unix_date: MVSTime(announcement.updatedAt) },
      auto_sync: true,
      file_size: announcement.data.largeImage.file_size,
      md5_checksum: announcement.data.largeImage.md5_checksum,
      auth_exempt: false,
      data: {},
    });

    file_storage_images.push({
      slug: announcement.smallImageKey,
      name: announcement.smallImageKey,
      created_at: { _hydra_unix_date: MVSTime(announcement.createdAt) },
      updated_at: { _hydra_unix_date: MVSTime(announcement.updatedAt) },
      auto_sync: true,
      file_size: announcement.data.smallImage.file_size,
      md5_checksum: announcement.data.smallImage.md5_checksum,
      auth_exempt: false,
      data: {},
    });
  });
  return file_storage_images;
}

async function getAnnouncementImageDetail(fileKey: string) {
  const rootQuery: PaprFilter<AnnouncementDocument> = {};
  if (fileKey.includes("thumbnail")) {
    rootQuery.smallImageKey = fileKey;
  } else {
    rootQuery.largeImageKey = fileKey;
  }
  const announcementFile = await AnnouncementModel.findOne(rootQuery);
  if (announcementFile) {
    const imageSizeSelector = rootQuery.smallImageKey
      ? announcementFile.data.smallImage
      : announcementFile.data.largeImage;
    const image = {
      slug: imageSizeSelector.key,
      name: imageSizeSelector.key,
      created_at: { _hydra_unix_date: MVSTime(announcementFile.createdAt) },
      updated_at: { _hydra_unix_date: MVSTime(announcementFile.updatedAt) },
      auto_sync: true,
      file_size: imageSizeSelector.file_size,
      md5_checksum: imageSizeSelector.md5_checksum,
      download_url: imageSizeSelector.url,
    };

    return image;
  }
  logger.error(`Error fetching announcement image ${fileKey}`);
}

export const CalendarEventsService = {
  getSplashScreenAnnouncementEvents,
  getAnnouncementImagesFileStorage,
  getAnnouncementImageDetail,
};
