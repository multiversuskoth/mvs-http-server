import { PlayerModel } from "@mvsi/database/models/Player";

import {
  asteriskCensorStrategy,
  englishDataset,
  englishRecommendedTransformers,
  RegExpMatcher,
  TextCensor,
} from "obscenity";

const matcher = new RegExpMatcher({
  ...englishDataset.build(),
  ...englishRecommendedTransformers,
});

const censor = new TextCensor();
censor.setStrategy(asteriskCensorStrategy());

export async function updateDisplayName(steam_id: string, name: string) {
  const matches = matcher.getAllMatches(name);
  const filtered = censor.applyTo(name, matches);
  await PlayerModel.findOneAndUpdate(
    { steam_id },
    {
      $set: {
        name: filtered,
      },
    },
  );
  return filtered;
}

export async function updateUserSettings(
  steam_id: string,
  data: { birthday?: string; country?: string; language?: string },
) {
  await PlayerModel.findOneAndUpdate(
    { steam_id },
    {
      $set: {
        birthday: data.birthday ? new Date(data.birthday) : undefined,
        country: data.country || undefined,
        language: data.language || undefined,
      },
    },
  );
  return;
}

export async function getUserData(steam_id: string) {
  const user = await PlayerModel.findOne({ steam_id });
  return {
    birthday: user?.birthday,
    country: user?.country,
    language: user?.language,
  };
}
