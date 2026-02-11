import { PerkPagesModel } from "@mvsi/database/models/PerkPages";
import { logger } from "@mvsi/logger";
import { ObjectId } from "mongodb";

async function getPerksForAccount(id: string) {
  const doc = await PerkPagesModel.findOne(
    { account_id: new ObjectId(id) },
    { projection: { perk_pages: 1, _id: 0 } },
  );
  return doc;
}

async function setPerksPage(
  accountId: string,
  data: {
    Character: string;
    Description: string;
    DisplayName: string;
    PageIndex: string;
    Perks: string[];
  },
) {
  const { Character, Description, DisplayName, PageIndex, Perks } = data;

  // Build the update path for this page
  const pageKey = `perk_pages.${Character}.${PageIndex}`;
  const updateValue = {
    DisplayName,
    Description,
    Perks,
  };
  // 2. Upsert the specific character/page index
  try {
    await PerkPagesModel.findOneAndUpdate(
      { account_id: new ObjectId(accountId) },
      {
        $set: {
          [pageKey]: updateValue as any,
        },
      },
      { upsert: true, returnDocument: "after" },
    );
  } catch (err) {
    logger.error("Error saving perks", err);
    throw new Error("Error saving perks");
  }
}

export const PerksService = {
  setPerksPage,
  getPerksForAccount,
};
