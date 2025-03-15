import { modelOptions, prop } from "@typegoose/typegoose";
import { Schema } from "mongoose";
import { Entries } from "type-fest";
import { MVSTime } from "../utils/date";

@modelOptions({ schemaOptions: { _id: false } })
export class InventoryItem {
  @prop({ required: true })
  count!: number;
  @prop()
  created_at!: Date | null;

  public static flatten(inventoryItem: InventoryItem, prefix: string, result: Record<any, any> = {}): Record<any, any> {
    result[prefix + ".count"] = inventoryItem.count;
    if (inventoryItem.created_at != null) {
      result[prefix + ".created_at"] = MVSTime(inventoryItem.created_at);
    }
    return result;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
export class InventoryCharacters {
  @prop()
  wonder_woman?: InventoryItem;
  @prop()
  Jason?: InventoryItem;
  @prop()
  BananaGuard?: InventoryItem;
  @prop()
  superman?: InventoryItem;
  @prop()
  currency?: InventoryItem;
  @prop()
  garnet?: InventoryItem;
  @prop()
  finn?: InventoryItem;
  @prop()
  shaggy?: InventoryItem;
  @prop()
  C029?: InventoryItem;
  @prop()
  C017?: InventoryItem;
  @prop()
  arya?: InventoryItem;
  @prop()
  batman?: InventoryItem;
  @prop()
  bugs_bunny?: InventoryItem;
  @prop()
  c16?: InventoryItem;
  @prop()
  creature?: InventoryItem;
  @prop()
  harleyquinn?: InventoryItem;
  @prop()
  jake?: InventoryItem;
  @prop()
  steven?: InventoryItem;
  @prop()
  taz?: InventoryItem;
  @prop()
  tom_and_jerry?: InventoryItem;
  @prop()
  velma?: InventoryItem;
  @prop()
  C028?: InventoryItem;
  @prop()
  C018?: InventoryItem;
  @prop()
  C023B?: InventoryItem;
  @prop()
  C023A?: InventoryItem;
  @prop()
  c038?: InventoryItem;
  @prop()
  C025?: InventoryItem;
  @prop()
  C027?: InventoryItem;

  public static flatten(inventoryCharacters: InventoryCharacters, prefix: string, result: Record<any, any> = {}): Record<any, any> {
    for (let [key, value] of Object.entries(inventoryCharacters) as Entries<InventoryCharacters>) {
      if (value != undefined) {
        InventoryItem.flatten(value, prefix + "_" + key, result);
      }
    }
    return result;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
export class InventoryBattlepass {
  @prop()
  "season-1"?: InventoryItem;
  @prop()
  "season-2"?: InventoryItem;
  @prop()
  "season-3"?: InventoryItem;

  public static flatten(inventoryBattlepass: InventoryBattlepass, prefix: string, result: Record<any, any> = {}) {
    for (let [key, value] of Object.entries(inventoryBattlepass) as Entries<InventoryBattlepass>) {
      if (value != undefined) {
        result = Object.assign(result, InventoryItem.flatten(value, prefix + "-" + key));
      }
    }
    return result;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
export class InventorySkins {
  @prop()
  c034_s01?: InventoryItem;

  public static flatten(inventorySkins: InventorySkins, prefix: string, result: Record<any, any> = {}) {
    for (let [key, value] of Object.entries(inventorySkins) as Entries<InventorySkins>) {
      if (value != undefined) {
        result = Object.assign(result, InventoryItem.flatten(value, prefix + "-" + key));
      }
    }
    return result;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
export class Inventory {
  @prop({ required: true })
  characters!: InventoryCharacters;
  @prop({ required: true })
  battlepass!: InventoryBattlepass;
  @prop({ required: true })
  skins!: InventorySkins;
  @prop()
  gleamium?: InventoryItem;

  public static flatten(inventory: Inventory, prefix: string, result: Record<any, any> = {}): Record<any, any> {
    result = Object.assign(result, InventorySkins.flatten(inventory.skins, prefix + ".skin"));
    result = Object.assign(result, InventoryCharacters.flatten(inventory.characters, prefix + ".character"));
    result = Object.assign(result, InventoryBattlepass.flatten(inventory.battlepass, prefix + ".battlepass"));
    if (inventory.gleamium) {
      result = Object.assign(result, InventoryItem.flatten(inventory.gleamium, prefix + ".gleamium"));
    }
    return result;
  }
}
