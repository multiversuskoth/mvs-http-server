import mongoose from "mongoose";
import env from "../env/env";

// connect().then(async () => {
//   console.log("try insert");
//   // console.log(await accountModel.findOne());
//   // for testing

//   // await configurationModel.create({
//   //   _id: "configuration",
//   //   gcm: {
//   //     enabled: null,
//   //     project_number: null,
//   //   },
//   //   gpgs: {
//   //     google_play_client_id: null,
//   //   },
//   //   apns: {
//   //     enabled: null,
//   //     environment: null,
//   //     sha1: null,
//   //   },
//   //   server_side_code_deploy: {
//   //     sha: "51006c7d5d56466e58047ed884f51ef2db0253ee",
//   //     instance: "ebc474d0-cd14-4d14-af59-32f0eefb8c60",
//   //   },
//   //   realtime: {
//   //     enabled: true,
//   //     "default-cluster": "ec2-us-east-1-dokken",
//   //     servers: {
//   //       "ec2-us-east-1-dokken": {
//   //         "dokken-realtime-4/1": {
//   //           ws: 1,
//   //           wss: "wss://us-east-1-dokken-realtime-4.wbagora.com:9101",
//   //           udp: "0.0.0.0:0",
//   //         },
//   //       },
//   //     },
//   //   },
//   // });

//   // await accountModel.create({
//   //   _id: new mongoose.Types.ObjectId("67b298f635dda07642f9d3a7"),
//   //   updated_at: 1740278186,
//   //   created_at: 1739757814,
//   //   deleted: false,
//   //   orphaned: false,
//   //   orphaned_reason: null,
//   //   public_id: "gffd",
//   //   identity: {
//   //     username: "gg",
//   //     avatar: "link to image",
//   //     default_username: false,
//   //     alternate: {
//   //       steam: {
//   //         id: "123",
//   //         username: "123",
//   //         avatar: "",
//   //         email: "",
//   //       },
//   //     },
//   //   },
//   //   locale: "en-US",
//   //   wb_account: {
//   //     completed: true,
//   //   },
//   //   points: 0,
//   //   state: "normal",
//   //   wbplay_data_synced: false,
//   //   wbplay_identity: null,
//   //   connections: [],
//   //   data: {
//   //     EULAAcceptTimestamp: Date.now(),
//   //     EULAAcceptVersion: 1,
//   //     LastLoginPlatform: "EPlatform::PC",
//   //     LastPlayedCharacterSlug: "character_superman",
//   //   },
//   //   presence_state: 1,
//   //   email_verification: {
//   //     state: "unverified",
//   //   },

//   //   external_accounts: {},

//   //   opt_ins: {
//   //     wbplay_optin: true,
//   //   },
//   //   presence: "online",
//   //   privacy_levels: {
//   //     clan: {
//   //       invitation: "default",
//   //     },
//   //     match: {
//   //       invitation: "default",
//   //     },
//   //     presence: {
//   //       state: "default",
//   //     },
//   //     relationship: {
//   //       follow: "default",
//   //     },
//   //   },
//   //   restriction_status: {},
//   //   auth: {
//   //     wb_network: [],
//   //   },
//   //   server_data: {},
//   // });

//   await playerModel.create(playerSampleData);
//   mongoose.disconnect();
// });

export async function connect() {
  await mongoose.connect(env.MONGODB_URI);
}
