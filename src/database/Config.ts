import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "config", timestamps: true } })
export class ConfigData {
  @prop({ required: true, default:1 })
  public CRC!: number;
}

export const ConfigDataModel = getModelForClass(ConfigData);
