import { prop, modelOptions, getModelForClass, Ref, Severity } from "@typegoose/typegoose";
import { PlayerTester } from "./PlayerTester";

export class CosmeticSet {
  @prop({ required: true })
  public AccountId!: string;

  @prop({ required: true })
  public Cosmetic!: string;

  @prop({ type: () => [String], required: true })
  public CosmeticId!: string[];
}

@modelOptions({ schemaOptions: { _id: false } })
export class CharacterCosmeticPages {
  // Dynamic keys: "0", "1", ...
  [setKey: string]: CosmeticSet;
}


@modelOptions({ schemaOptions: { collection: 'cosmetics' } })
export class Cosmetics {
  @prop({ required: true, ref: () => PlayerTester })
  public account_id!: Ref<PlayerTester>;

  @prop({ required: true, default: 'banner_default' })
  public BannerSlug!: string;
  
  // This is profile icon
  @prop({ required: true, default: 'profile_icon_default' })
  public Slug!: string;

  @prop({ required: true, default: 'ring_out_vfx_default' })
  public RingoutVfxSlug!: string;

  @prop({ required: true, default: 'announcer_pack_default' })
  public AnnouncerPackSlug!: string;

  @prop({ type: () => [String], default: Array(3).fill('stat_tracking_bundle_default') })
  public StatTrackers!: string[];
}

@modelOptions({ schemaOptions: { _id: false }, options: { allowMixed: Severity.ALLOW } })
export class CosmeticPages {
  @prop({ required: true, ref: () => PlayerTester })
  public account_id!: Ref<PlayerTester>;

  @prop({ type: () => Object, required: true })
  public cosmetic_pages!: {
    [cosmetic: string]: {
      [cosmeticid: string]: Cosmetics;
    };
  };
}

export const CosmeticsModel = getModelForClass(Cosmetics);
