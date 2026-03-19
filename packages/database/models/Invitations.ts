import { schema, types } from "papr";
import papr, { ObjectId } from "../papr";

const invitationSchema = schema(
  {
    sent_from: types.objectId({ required: true }),
    sent_to: types.objectId({ required: true }),
    state: types.enum(["open", "accepted", "rejected"]),
  },
  {
    timestamps: true,
    defaults: {
      sent_from: new ObjectId(),
      sent_to: new ObjectId(),
      state: "open",
    },
  },
);

export type Invitation = (typeof invitationSchema)[0];

export const InvitationModel = papr.model("invitations", invitationSchema);
