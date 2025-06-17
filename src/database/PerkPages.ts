import { prop, modelOptions, getModelForClass, Ref } from "@typegoose/typegoose";
import { PlayerTester } from "./PlayerTester";

export class PerkSet {
  @prop({ required: true })
  public DisplayName!: string;

  @prop({ required: true })
  public Description!: string;

  @prop({ type: () => [String], required: true })
  public Perks!: string[];
}

@modelOptions({ schemaOptions: { _id: false } })
export class CharacterPerkPages {
  // Dynamic keys: "0", "1", ...
  [setKey: string]: PerkSet;
}

@modelOptions({ schemaOptions: { _id: false } })
export class PerkPages {
  @prop({ required: true, ref: () => PlayerTester })
  public account_id!: Ref<PlayerTester>;

  @prop({ type: () => CharacterPerkPages, required: true })
  public perk_pages!: Map<string, CharacterPerkPages[]>;
}

export const PerkPagesModel = getModelForClass(PerkPages);
