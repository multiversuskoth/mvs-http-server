import { randomUUID } from "node:crypto";
import { ObjectId } from "mongodb";
import { schema, types } from "papr";
import papr, { dbEmitter } from "../papr";
import { ROLES } from "../roles";

const playerSchema = schema(
  {
    name: types.string({ required: true }),
    steam_name: types.string({ required: true }),
    admin: types.boolean({ required: true }),
    role: types.enum(ROLES),
    ip: types.string({ required: true }),
    steam_id: types.string({ required: true }),
    blocked: types.boolean({ required: true }),
    profile_id: types.objectId({ required: true }),
    public_id: types.string({ required: true }),
    profile_icon: types.string({ required: true }),
    character: types.string({ required: true }),
    variant: types.string({ required: true }),
    last_login: types.date({ required: true }),
    gameplay_preferences: types.number({ required: false }),

    birthday: types.date(),
    country: types.string(),
    language: types.string(),
  },
  {
    timestamps: true,
    defaults: () => ({
      admin: false,
      role: "basic",
      blocked: false,
      character: "character_shaggy",
      ip: "",
      last_login: new Date(),
      name: "",
      profile_icon: "profile_icon_default",
      profile_id: new ObjectId(),
      public_id: randomUUID(),
      steam_id: "",
      steam_name: "",
      gameplay_preferences: 544,
      variant: "skin_shaggy_default",
      country: "US",
      language: "en",
    }),
  },
);

dbEmitter.once("connected", async () => {
  await PlayerModel.collection.createIndex({ public_id: 1 });
  await PlayerModel.collection.createIndex({ name: 1 });
  await PlayerModel.collection.createIndex({ steam_id: 1 });
});

export type Player = (typeof playerSchema)[0];

export const PlayerModel = papr.model("players", playerSchema);
