import { prop } from "@typegoose/typegoose";

export class WbNetwork {
  @prop({ required: true })
  network_token!: string;
}

export class NetworkInformation {
  @prop({ required: true })
  maintenance: any;

  @prop({ required: true })
  wb_network!: WbNetwork;

  // notifications: ?;
}
