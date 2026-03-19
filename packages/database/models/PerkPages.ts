import { types, schema } from 'papr';
import papr from '../papr';



// perk_pages: { [character: string]: { [pageIndex: string]: PerkSet } }
export const perkPagesSchema = schema(
  {
    account_id: types.objectId({ required: true }),
    perk_pages: types.objectGeneric(
      types.objectGeneric(
        types.object({
          DisplayName: types.string(),
          Description: types.string(),
          Perks: types.array(types.string()),
        })
      )
    ),
  },
);

export type PerkPages = (typeof perkPagesSchema)[0];
export const PerkPagesModel = papr.model("perkpages", perkPagesSchema);