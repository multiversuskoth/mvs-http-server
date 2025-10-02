import { prop, getModelForClass, modelOptions, index } from "@typegoose/typegoose";

@index({ assetType: 1 })
@modelOptions({ schemaOptions: { timestamps: true } })
export class DataAsset {
  @prop({ required: true, trim: true })
  public assetType!: string;

  @prop({ required: true, trim: true })
  public assetPath!: string;

  @prop({ required: true, default: true })
  public enabled!: boolean;

  @prop({ required: true, unique: true, trim: true })
  public slug!: string;

  @prop({ required: true, default: "", trim: true })
  public character_slug!: string;

  @prop({ required: true, default: "", trim: true })
  public MasteryRewardTrack!: string;
}

export const DataAssetModel = getModelForClass(DataAsset);
