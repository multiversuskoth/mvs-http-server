

import { types, schema } from 'papr';
import papr from '../papr';

papr.db?.collection("ip_blocks").createIndex({ ip: 1 }, { unique: true })
export const ipBlockSchema = schema(
  {
    ip: types.string({ required: true }),
  },
  {
    defaults: () => ({
      ip: "",
    }),
  }
);

export type IPBlock = (typeof ipBlockSchema)[0];
export const IPBlockModel = papr.model("ipblocks", ipBlockSchema);