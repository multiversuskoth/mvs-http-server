import { schema, types } from "papr";
import papr from "../papr";

export const CosmeticsDefault = {
  Taunts: {},
  AnnouncerPack: "announcer_pack_default",
  Banner: "banner_default",
  RingoutVfx: "ring_out_vfx_default",
  StatTrackers: {
    StatTrackerSlots: ["", "", ""],
  },
  Gems: {
    GemSlots: ["", "", ""],
  },
};
const { Taunts, ...ommitTauntsDefault } = CosmeticsDefault;
export const cosmeticsSchema = schema(
  {
    // In your old model this was Ref<Player>. In papr, store the foreign key as a string (steam_id, public_id, etc).

    Taunts: types.objectGeneric(types.object({ TauntSlots: types.array(types.string()) })),

    AnnouncerPack: types.string({ required: true }),
    Banner: types.string({ required: true }),
    StatTrackers: types.object(
      {
        StatTrackerSlots: types.array(types.string()),
      },
      { required: true },
    ),
    RingoutVfx: types.string({ required: true }),
    Gems: types.object(
      {
        GemSlots: types.array(types.string()),
      },
      { required: true },
    ),
  },
  {
    defaults: () => ommitTauntsDefault,
  },
);

export type Cosmetics = (typeof cosmeticsSchema)[0];
export type TauntSlotsClass = Cosmetics["Taunts"];
export const CosmeticsModel = papr.model("cosmetics", cosmeticsSchema);
