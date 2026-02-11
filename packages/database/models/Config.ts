import { schema, types } from "papr";
import papr from "../papr";

export const configDataSchema = schema(
  {
    CRC: types.number({ required: true }),
    VERSION: types.number({ required: true }),
  },
  {
    timestamps: true,
    defaults: () => ({
      CRC: 1,
      VERSION: 1000,
    }),
  },
);

export type ConfigData = (typeof configDataSchema)[0];
export const ConfigDataModel = papr.model("config", configDataSchema);
