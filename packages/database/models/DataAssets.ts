import { schema, types } from "papr";
import papr, { dbEmitter } from "../papr";

export const dataAssetSchema = schema(
  {
    assetType: types.string({ required: true }),
    assetPath: types.string({ required: true }),
    enabled: types.boolean({ required: true }),
    slug: types.string({ required: true }),
    character_slug: types.string({ required: true }),
    MasteryRewardTrack: types.string(),
    Properties: types.unknown(),
  },
  {
    timestamps: true,
    defaults: () => ({
      assetType: "",
      assetPath: "",
      enabled: true,
      slug: "",
      character_slug: "",
      MasteryRewardTrack: "",
    }),
  },
);

dbEmitter.once("connected", async () => {
  await DataAssetModel.collection.createIndex({ assetType: 1 });
  await DataAssetModel.collection.createIndex({ slug: 1 }, { unique: true });
  //await DataAssetModel.collection.createIndex({ assetPath: 1 }, { unique: true });

});

export type DataAsset = (typeof dataAssetSchema)[0];
export const DataAssetModel = papr.model("dataassets", dataAssetSchema);
