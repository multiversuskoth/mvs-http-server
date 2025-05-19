import { CharactersSet } from "../enums/characters";

const characterKeysValidator = {
  validator: function (v: Map<string, unknown>) {
    for (const key in v.keys()) {
      if (!CharactersSet.has(key)) {
        return false;
      }
    }
    return true;
  },
  message: "invalid key, not in characters",
};

export default characterKeysValidator;
