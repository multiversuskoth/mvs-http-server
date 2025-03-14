import { SchemaOptions } from "mongoose";

const toJSONVirtualId: SchemaOptions["toJSON"] = {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
};

export default toJSONVirtualId;
