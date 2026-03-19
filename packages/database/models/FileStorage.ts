import { schema, types } from "papr";
import papr from "../papr";

const announcementSchema = schema(
  {
    start_at: types.date({ required: true }),
    end_at: types.date(),
    data: types.object({
      featured: types.boolean({ required: true }),
      display_in_modal: types.boolean({ required: true }),
      description: types.string({ required: true }),
      priority: types.number({ required: true }),
      slug: types.string(),
      title: types.string({ required: true }),
      titleSmall: types.string({ required: true }),
      smallImage: types.object({ key: types.string(), url: types.string() }),
      largeImage: types.object({ key: types.string(), url: types.string() }),
      action: types.object(
        {
          actionButtonTitle: types.string({ required: true }),
          isActionable: types.boolean({ required: true }),
          website: types.string({ required: true }),
        },
        { required: false },
      ),
    }),
    entry: types.object({
      name: types.string({ required: true }),
      calendar_type_slug: types.constant("carousel"),
    }),
  },
  {
    timestamps: false,
  },
);

export type AnnouncementDocument = (typeof announcementSchema)[0];

export const AnnouncementModel = papr.model("annoucements", announcementSchema);
