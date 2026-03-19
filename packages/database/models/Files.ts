import { schema, types } from "papr";
import papr from "../papr";

const filesSchema = schema(
  {
    type: types.enum(["new", "patch"], { required: true }),
    version: types.number({ required: true }),
    url: types.string({ required: true }),
    filename: types.string({ required: true }),
    uploaded_by: types.string({ required: true }),
    size: types.number({ required: true }),
    forceCleanup: types.boolean(),
  },
  {
    timestamps: true,
  },
);

export type FileDocument = (typeof filesSchema)[0];

export const FileModel = papr.model("files", filesSchema);
