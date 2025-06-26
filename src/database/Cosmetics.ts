import { prop, modelOptions, getModelForClass, Ref, Severity } from "@typegoose/typegoose";
import { PlayerTester } from "./PlayerTester";

export class TauntSlotsClass {
  @prop({ type: () => [String], default: [] })
  public TauntSlots!: string[];
}

// Subfield for StatTrackers
class StatTrackersClass {
  @prop({
    type: () => [String],
    default: [],
  })
  public StatTrackerSlots!: string[];
}

// Subfield for Gems
class GemsClass {
  @prop({
    type: () => [String],
    default: [],
  })
  public GemSlots!: string[];
}

@modelOptions({ schemaOptions: { collection: "cosmetics" } })
export class Cosmetics {
  @prop({ required: true, ref: () => PlayerTester })
  public account_id!: Ref<PlayerTester>;

  @prop({
    type: () => TauntSlotsClass,
    _id: false,
    default: () => ({}),
  })
  public Taunts!: { [character: string]: TauntSlotsClass };

  @prop({ required: true, default: "announcer_pack_default" })
  public AnnouncerPack!: string;

  @prop({ required: true, default: "banner_default" })
  public Banner!: string;

  @prop({
    _id: false,
    default: () => ({
      StatTrackerSlots: [
        "",
        "",
        "",
      ],
    }),
  })
  public StatTrackers!: StatTrackersClass;

  @prop({ required: true, default: "ring_out_vfx_default" })
  public RingoutVfx!: string;

  @prop({
    _id: false,
    default: () => ({
      GemSlots: [
        "",
        "",
        "",
      ],
    }),
  })
  public Gems!: GemsClass;
}

export const CosmeticsModel = getModelForClass(Cosmetics);
