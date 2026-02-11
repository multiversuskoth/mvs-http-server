import { DataAsset, DataAssetModel } from "@mvsi/database/models/DataAssets";

export type AssetType =
  | "AnnouncerPackData"
  | "BannerData"
  | "CharacterData"
  | "EmoteData"
  | "MvsGemHsda"
  | "MvsPerkHsda"
  | "ProfileIconData"
  | "RingOutVfxData"
  | "SkinData"
  | "StatTrackingBundleData"
  | "TauntData";

let ALL_ASSETS: DataAsset[] = [];

interface SkinByChar {
  [key: string]: SkinSlugs;
}

interface SkinSlugs {
  Slugs: string[];
}

export function getAllAssets() {
  return ALL_ASSETS;
}

export async function loadAssets() {
  ALL_ASSETS = await DataAssetModel.find({ enabled: true });
}

export async function loadAssetsByType(assetType: AssetType) {
  return DataAssetModel.find({ assetType, enabled: true });
}

export function getAssetsByType(assetType: AssetType) {
  return ALL_ASSETS.filter((a) => a.assetType === assetType);
}

export function getAllSkinsByChar() {
  const chars = getAssetsByType("CharacterData");
  const skins = getAssetsByType("SkinData");
  const skinsByChar: SkinByChar = {};
  for (const char of chars) {
    skinsByChar[char.slug] = { Slugs: skins.filter((s) => s.character_slug === char.slug).map((s) => s.slug) };
  }
  return skinsByChar;
}

export function getAllTauntsByChar() {
  const chars = getAssetsByType("CharacterData");
  const skins = getAssetsByType("TauntData");
  const skinsByChar: SkinByChar = {};
  for (const char of chars) {
    skinsByChar[char.slug] = { Slugs: skins.filter((s) => s.character_slug === char.slug).map((s) => s.slug) };
  }
  return skinsByChar;
}
