import { modelOptions, prop } from "@typegoose/typegoose";
import { Entries } from "type-fest";
import { dateToMVSTime } from "../utils/date";

@modelOptions({ schemaOptions: { _id: false } })
export class InventoryItem {
  @prop({ required: true })
  count!: number;
  @prop({ type: Date, get: dateToMVSTime })
  created_at?: number;

  public static flatten(inventoryItem: InventoryItem, prefix: string, result: Record<any, any> = {}): Record<any, any> {
    result[prefix + ".count"] = inventoryItem.count;
    result[prefix + ".created_at"] = inventoryItem.created_at;
    // if (inventoryItem.created_at != null) {
    //   result[prefix + ".created_at"] = dateToMVSTime(inventoryItem.created_at);
    // }
    return result;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
export class InventoryCharacters {
  public static flatten(inventoryCharacters: InventoryCharacters, prefix: string, result: Record<any, any> = {}): Record<any, any> {
    for (const [key, value] of Object.entries(inventoryCharacters) as Entries<InventoryCharacters>) {
      if (value != undefined) {
        InventoryItem.flatten(value, prefix + "_" + key, result);
      }
    }
    return result;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
export class InventoryBattlepass {
  public static flatten(inventoryBattlepass: InventoryBattlepass, prefix: string, result: Record<any, any> = {}) {
    for (const [key, value] of Object.entries(inventoryBattlepass) as Entries<InventoryBattlepass>) {
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
    for (const [key, value] of Object.entries(inventorySkins) as Entries<InventorySkins>) {
      if (value != undefined) {
        result = Object.assign(result, InventoryItem.flatten(value, prefix + "-" + key));
      }
    }
    return result;
  }
}

@modelOptions({ schemaOptions: { _id: false } })
export class Inventory {
  @prop()
  character_BananaGuard?: InventoryItem;
  @prop()
  character_C017?: InventoryItem;
  @prop()
  character_C018?: InventoryItem;
  @prop()
  character_C020?: InventoryItem;
  @prop()
  character_C021?: InventoryItem;
  @prop()
  character_C023A?: InventoryItem;
  @prop()
  character_C023B?: InventoryItem;
  @prop()
  character_C025?: InventoryItem;
  @prop()
  character_C026?: InventoryItem;
  @prop()
  character_C027?: InventoryItem;
  @prop()
  character_C028?: InventoryItem;
  @prop()
  character_C029?: InventoryItem;
  @prop()
  character_C030?: InventoryItem;
  @prop()
  character_C031?: InventoryItem;
  @prop()
  character_Jason?: InventoryItem;
  @prop()
  character_arya?: InventoryItem;
  @prop()
  character_batman?: InventoryItem;
  @prop()
  character_bugs_bunny?: InventoryItem;
  @prop()
  character_c019?: InventoryItem;
  @prop()
  character_c024?: InventoryItem;
  @prop()
  character_c036?: InventoryItem;
  @prop()
  character_c038?: InventoryItem;
  @prop()
  character_c16?: InventoryItem;
  @prop()
  character_creature?: InventoryItem;
  @prop()
  character_finn?: InventoryItem;
  @prop()
  character_garnet?: InventoryItem;
  @prop()
  character_harleyquinn?: InventoryItem;
  @prop()
  character_jake?: InventoryItem;
  @prop()
  character_shaggy?: InventoryItem;
  @prop()
  character_steven?: InventoryItem;
  @prop()
  character_superman?: InventoryItem;
  @prop()
  character_taz?: InventoryItem;
  @prop()
  character_tom_and_jerry?: InventoryItem;
  @prop()
  character_velma?: InventoryItem;
  @prop()
  character_wonder_woman?: InventoryItem;

  @prop()
  "battlepass-season-1"?: InventoryItem;
  @prop()
  "battlepass-season-2"?: InventoryItem;
  @prop()
  "battlepass-season-3"?: InventoryItem;

  @prop({ required: true })
  skins!: InventorySkins;
  @prop()
  gleamium?: InventoryItem;

  public static flatten(inventory: Inventory, prefix: string, result: Record<any, any> = {}): Record<any, any> {
    result = Object.assign(result, InventorySkins.flatten(inventory.skins, prefix + ".skin"));
    // result = Object.assign(result, InventoryCharacters.flatten(inventory.characters, prefix + ".character"));
    // result = Object.assign(result, InventoryBattlepass.flatten(inventory.battlepass, prefix + ".battlepass"));
    if (inventory.gleamium) {
      result = Object.assign(result, InventoryItem.flatten(inventory.gleamium, prefix + ".gleamium"));
    }
    return result;
  }
}
