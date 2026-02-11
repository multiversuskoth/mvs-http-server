import { schema, types } from "papr";
import papr from "../papr";

const announcementSchema = schema(
  {
    largeImageKey: types.string({ required: true }),
    smallImageKey: types.string({ required: true }),
    start_at: types.date({ required: true }),
    end_at: types.date(),
    data: types.object(
      {
        featured: types.boolean({ required: true }),
        display_in_modal: types.boolean({ required: true }),
        description: types.string({ required: true }),
        priority: types.number({ required: true }),

        title: types.string({ required: true }),
        titleSmall: types.string({ required: true }),
        smallImage: types.object(
          {
            key: types.string({ required: true }),
            url: types.string({ required: true }),
            md5_checksum: types.string({ required: true }),
            file_size: types.number({ required: true }),
          },
          { required: true },
        ),
        largeImage: types.object(
          {
            key: types.string({ required: true }),
            url: types.string({ required: true }),
            md5_checksum: types.string({ required: true }),
            file_size: types.number({ required: true }),
          },
          { required: true },
        ),
        action: types.object(
          {
            actionButtonTitle: types.string({ required: true }),
            isActionable: types.boolean({ required: true }),
            website: types.string({ required: true }),
          },
          { required: false },
        ),
      },
      { required: true },
    ),
  },
  {
    timestamps: true,
  },
);

export type AnnouncementDocument = (typeof announcementSchema)[0];

export const AnnouncementModel = papr.model("annoucements", announcementSchema);
