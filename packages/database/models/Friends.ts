import { schema, types } from "papr";
import papr from "../papr";

const friendSchema = schema(
  {
    friends: types.array(types.objectId(), { required: true, maxItems: 1000, uniqueItems: true }),
  },
  {
    defaults: {
      friends: [],
    },
  },
);

export type Friend = (typeof friendSchema)[0];

export const FriendModel = papr.model("friends", friendSchema);
