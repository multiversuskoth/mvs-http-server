import express, { Request, Response } from "express";
import { MVSQueries } from "../interfaces/queries_types";

export async function handleFriends_me(req: Request<{}, {}, {}, MVSQueries.Friends_me_QUERY>, res: Response) {
  res.send({
    "total": 30,
    "page": 1,
    "page_size": 1000,
    "results": [
      {
        "created_at": "2024-08-20T02:11:58+00:00",
        "account": {
          "public_id": "p27f58a6c649741d1bfe8efd3a8d9d47c",
          "username": "Imkindas",
          "avatar": {
            "name": "Kitana Dod",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/kitana-dod.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-09-10T06:12:59+00:00",
        "account": {
          "public_id": "p3a525c56c9c9491ea11deaa2bdbcd074",
          "username": "TTV2Ducky",
          "avatar": {
            "name": "Jade",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/jade.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-09-10T06:12:58+00:00",
        "account": {
          "public_id": "pbca5d5dee090411e891167dd107823a9",
          "username": "TTVBardoon",
          "avatar": {
            "name": "Hell Boy",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/hellboy.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-11-02T05:46:39+00:00",
        "account": {
          "public_id": "p7dccfc3279da4d40a80eb09085696d48",
          "username": "KappaPingWarrior",
          "avatar": {
            "name": "MultiVersus Jake",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-jake.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-10-15T19:41:07+00:00",
        "account": {
          "public_id": "p199851c1135345b5a5a40554ac1d69c0",
          "username": "GIRTHHOG",
          "avatar": {
            "name": "MultiVersus Reinddog",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-reinddog.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2023-02-07T03:03:23+00:00",
        "account": {
          "public_id": "pfaf60514684c4146b95b75333e06534c",
          "username": "meowmix",
          "avatar": {
            "name": "MultiVersus Harley Quinn",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-harley-quinn.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2025-03-08T05:39:01+00:00",
        "account": {
          "public_id": "pb30339ec9eb141a1a0e254b104a0e19e",
          "username": "Maucrak2010",
          "avatar": {
            "name": "MultiVersus Shaggy",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-shaggy.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-07-26T05:09:18+00:00",
        "account": {
          "public_id": "pab466111aa524c5fa10a00cc5988daea",
          "username": "TTVBOBtheMidnightD",
          "avatar": {
            "name": "Wonder Woman",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/wonder-woman.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2023-02-12T02:22:11+00:00",
        "account": {
          "public_id": "p25ebcabd41634b39b1b8708ae35b536e",
          "username": "TwitchTheFinnMain",
          "avatar": {
            "name": "MultiVersus Finn",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-finn.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-12-31T04:56:43+00:00",
        "account": {
          "public_id": "pd5014a5e42754af9b8b036886e0b3e00",
          "username": "000rico",
          "avatar": {
            "name": "MultiVersus Arya",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-arya.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-12-31T04:56:42+00:00",
        "account": {
          "public_id": "pd0a811b234e84511bfd4ff59fda96119",
          "username": "TTVSoraMVS",
          "avatar": {
            "name": "MultiVersus Bugs Bunny",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-bugs-bunny.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2023-02-12T02:22:09+00:00",
        "account": {
          "public_id": "p8fbc62b56038456f815ef65f682f4c09",
          "username": "steezmakerTTV",
          "avatar": {
            "name": "Scorpion",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/scorpion.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-09-10T06:13:01+00:00",
        "account": {
          "public_id": "p59837ae314ef422c8cfa257da0076064",
          "username": "TTVmTricKMVS",
          "avatar": {
            "name": "MultiVersus Shaggy",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-shaggy.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-07-26T05:09:14+00:00",
        "account": {
          "public_id": "p7fc83e7fd818419fa27b0dd04de4adb0",
          "username": "MlDVERSUS",
          "avatar": {
            "name": "MultiVersus Steven",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-steven.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-10-29T17:45:55+00:00",
        "account": {
          "public_id": "p89ea17b0416f410abe718aa16ead6da0",
          "username": "lR34L1TYI",
          "avatar": {
            "name": "Scorpion",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/scorpion.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2025-01-28T21:53:08+00:00",
        "account": {
          "public_id": "p439d5240688045aaaf3af823204e4ef9",
          "username": "TheJarJar",
          "avatar": {
            "name": "Batman 3",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/batman-3.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-09-10T06:13:08+00:00",
        "account": {
          "public_id": "pc8608ac6ff124c05ac6af4fc69c83bf5",
          "username": "Mohawk048",
          "avatar": {
            "name": "MultiVersus Arya",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-arya.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-09-10T06:13:02+00:00",
        "account": {
          "public_id": "pbf567a46fbee4cdb83a5363a5fc6f740",
          "username": "Enclav3",
          "avatar": {
            "name": "MultiVersus Harley Quinn",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-harley-quinn.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-10-15T19:41:10+00:00",
        "account": {
          "public_id": "p1b75a7330b4142628bf4bc85b0b4bc00",
          "username": "Skemor787",
          "avatar": {
            "name": "MultiVersus Finn",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-finn.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-09-10T06:13:05+00:00",
        "account": {
          "public_id": "p2b4654533d284e438c931afe4b714b42",
          "username": "TTVREDDDUM",
          "avatar": {
            "name": "Harley Quin",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/harley-quinn.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-09-10T06:12:57+00:00",
        "account": {
          "public_id": "p94e38f30c93c421db8228f3f5277312b",
          "username": "CodyReborn",
          "avatar": {
            "name": "MultiVersus Bugs Bunny",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-bugs-bunny.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-10-29T17:46:00+00:00",
        "account": {
          "public_id": "p5e498def514a4c8f8883d5c23fbab11b",
          "username": "FatpacsBBC",
          "avatar": {
            "name": "MultiVersus Jake",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-jake.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-05-30T15:57:03+00:00",
        "account": {
          "public_id": "p35700613b42848e1ad34cd226e1cab4d",
          "username": "Dre93",
          "avatar": {
            "name": "Batman 1",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/batman-1.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-09-10T06:13:15+00:00",
        "account": {
          "public_id": "pdc30e24d0b7f414d8494395a88386495",
          "username": "susisbetterTTV",
          "avatar": {
            "name": "Subzero",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/subzero.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2025-01-09T16:13:37+00:00",
        "account": {
          "public_id": "p8ea50a4256f24f25b059f8aa1bc96d64",
          "username": "Thatkidkd26",
          "avatar": {
            "name": "Harley Quin",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/harley-quinn.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2025-01-05T04:11:20+00:00",
        "account": {
          "public_id": "p3e84acd86b19465a899796d017c6d454",
          "username": "RICOSHMOKESTV",
          "avatar": {
            "name": "Subzero",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/subzero.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-10-03T20:04:23+00:00",
        "account": {
          "public_id": "p81df2b19384f4ecfbe2e0875d2a5cdd4",
          "username": "DR4C0Ottv",
          "avatar": {
            "name": "MultiVersus Harley Quinn",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-harley-quinn.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-11-02T05:46:41+00:00",
        "account": {
          "public_id": "p86065ca250f741f7be6018eb4bc5e2b2",
          "username": "ttvGorifye",
          "avatar": {
            "name": "Harley Quin",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/harley-quinn.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-11-05T21:12:08+00:00",
        "account": {
          "public_id": "pf615757855944edbad27f17a17c328ec",
          "username": "ItsC013",
          "avatar": {
            "name": "MultiVersus Tom and Jerry",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-tom-and-jerry.jpg"
          },
          "presence_state": 0
        }
      },
      {
        "created_at": "2024-10-07T01:28:51+00:00",
        "account": {
          "public_id": "p6837467bfcb847c8acc40f5982e8ea1b",
          "username": "ttvMKSWRATH",
          "avatar": {
            "name": "Scorpion",
            "image_url": "https://prod-network-images.wbagora.com/network/account-wbgames-com/scorpion.jpg"
          },
          "presence_state": 0
        }
      }
    ]
  });
}

export async function handleFriends_me_invitations_incoming(
  req: Request<{}, {}, {}, MVSQueries.Friends_me_invitations_incoming_QUERY>,
  res: Response,
) {
  res.send({
    total: 36,
    page: 1,
    page_size: 1000,
    results: [
      {
        id: "6691c09628b6c82483dc3507",
        sent_from: "66580bb4020f32a8b586bcd5",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pf82eeed3a6854507ac305cc1747d5cb1",
          username: "Tyhallow",
          avatar: { name: "Batman 3", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/batman-3.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-12T23:47:34+00:00",
        updated_at: "2024-07-12T23:47:34+00:00",
      },
      {
        id: "6687a99a4a7ef1441eb746be",
        sent_from: "628331784b3956d0a6cf6b28",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pc5937055ed884e0f978b89d687f5a06d",
          username: "IguanaEager681",
          avatar: { name: "Harley Quin", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/harley-quinn.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-05T08:06:50+00:00",
        updated_at: "2024-07-05T08:06:50+00:00",
      },
      {
        id: "66937f9e28efcd6492385eb0",
        sent_from: "62f4784016d5cbe6edbf353b",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p18f7146af2be4a679b7935f0e91f6683",
          username: "RvveI7",
          avatar: { name: "Scorpion", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/scorpion.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-14T07:34:54+00:00",
        updated_at: "2024-07-14T07:34:54+00:00",
      },
      {
        id: "66a31d019d3e21e938e8a7f7",
        sent_from: "62e824cc9b4d1350d091e633",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p626d6bbe66ab416d93ab9ef8175bf820",
          username: "ThatDoodKlumsy",
          avatar: {
            name: "MultiVersus Shaggy",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-shaggy.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-26T03:50:25+00:00",
        updated_at: "2024-07-26T03:50:25+00:00",
      },
      {
        id: "66adecf6e4eab4345e7eacd7",
        sent_from: "62e010cd32e42b7ffb1284cd",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p26a0c238ee0842288f2a20f9dd80120e",
          username: "Hussain0",
          avatar: {
            name: "MultiVersus Tom and Jerry",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-tom-and-jerry.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-08-03T08:40:22+00:00",
        updated_at: "2024-08-03T08:40:22+00:00",
      },
      {
        id: "67b3730c43a78dbbc5cc16f7",
        sent_from: "62d8eee13132495351ec4f7c",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pfb8c645e3d08486bb04f1144aaf3c0d0",
          username: "AlienBmo",
          avatar: {
            name: "MultiVersus Bugs Bunny",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-bugs-bunny.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2025-02-17T17:34:04+00:00",
        updated_at: "2025-02-17T17:34:04+00:00",
      },
      {
        id: "669e306608d0a3a1ab082d07",
        sent_from: "666d3d34554e432709062b43",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pd78d674e73414296a400a67085bae7b5",
          username: "BASSGAWDSTOLEHER",
          avatar: { name: "MultiVersus Arya", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-arya.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-22T10:11:50+00:00",
        updated_at: "2024-07-22T10:11:50+00:00",
      },
      {
        id: "6697371ba320e3a32b877c68",
        sent_from: "62e0369b4efe381677a9c11e",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p814f5f4cc6e242d181c91b57f12047fe",
          username: "Littyking707",
          avatar: { name: "Scorpion", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/scorpion.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-17T03:14:35+00:00",
        updated_at: "2024-07-17T03:14:35+00:00",
      },
      {
        id: "66ae8adce4598f4e4a962882",
        sent_from: "628bd4aab2def63cba35a5a1",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pe3d07117b38248cbb10883162830f385",
          username: "DuurtLang",
          avatar: { name: "Harley Quin", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/harley-quinn.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-08-03T19:54:04+00:00",
        updated_at: "2024-08-03T19:54:04+00:00",
      },
      {
        id: "668aeda9aae58827fc0ce5da",
        sent_from: "610d2e9460c8c36f2749b01e",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p0118072876f84338a8cf27991702cdb9",
          username: "RUNN3Ro1",
          avatar: { name: "MultiVersus Finn", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-finn.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-07T19:34:01+00:00",
        updated_at: "2024-07-07T19:34:01+00:00",
      },
      {
        id: "66971f2538cf7c8f1ab74a6a",
        sent_from: "62dd28074cab927dedda44be",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pee2e6179f5ce4f7a9ff22559d9b529c4",
          username: "itstrickybabyy",
          avatar: { name: "MultiVersus Jake", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-jake.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-17T01:32:21+00:00",
        updated_at: "2024-07-17T01:32:21+00:00",
      },
      {
        id: "6691078aa9b2bf9b9cf8c212",
        sent_from: "6286b49342003c43423e49fb",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pa42acded2f2b45ccbb16068aebd2bfcf",
          username: "Arkonix",
          avatar: { name: "Batman 2", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/batman-2.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-12T10:38:02+00:00",
        updated_at: "2024-07-12T10:38:02+00:00",
      },
      {
        id: "668f958587b3f1e3d605d4f7",
        sent_from: "627d7ebe8f8cd50ecba8ba38",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p8cdb1849dde14439854c1b7c4275ca1f",
          username: "FrenchyBB",
          avatar: {
            name: "MultiVersus Wonder Woman",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-wonder-woman.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-11T08:19:17+00:00",
        updated_at: "2024-07-11T08:19:17+00:00",
      },
      {
        id: "669e76f7e4a0975577796ffd",
        sent_from: "62e09b2c7b5dda01506f5785",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pe4d6fb4de9304f7892ea3f681ab6528b",
          username: "Whitelightnang",
          avatar: { name: "Jade", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/jade.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-22T15:12:55+00:00",
        updated_at: "2024-07-22T15:12:55+00:00",
      },
      {
        id: "66a2895fb2d695fd4a6db1db",
        sent_from: "62e5120d684a412f19da5e5e",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pa0c7325a55e84850ba994e845e745e8d",
          username: "ttvLunaam",
          avatar: { name: "Brainiac", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/brainiac.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-25T17:20:31+00:00",
        updated_at: "2024-07-25T17:20:31+00:00",
      },
      {
        id: "66ac77961c1145cc86486f79",
        sent_from: "62e42cfc9b4d1350d081e1bb",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pa7edb1ae4a72424581e2c1e8aaa90ae1",
          username: "Veteranohacker",
          avatar: { name: "MultiVersus Arya", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-arya.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-08-02T06:07:18+00:00",
        updated_at: "2024-08-02T06:07:18+00:00",
      },
      {
        id: "669282a79727eb46c6758611",
        sent_from: "62e18eb5aa69dea1a9eb6ecd",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p67b58bcb5cf24f21b17c409d3301bf50",
          username: "Mikenem",
          avatar: {
            name: "MultiVersus Batman",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-batman.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-13T13:35:35+00:00",
        updated_at: "2024-07-13T13:35:35+00:00",
      },
      {
        id: "6694b575a33b3a4baecb72ce",
        sent_from: "62e05cca173f797e1bc4052a",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pfe53bc121e484aa1a32f59574d8c1297",
          username: "NewFreezah",
          avatar: { name: "Jade", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/jade.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-15T05:36:53+00:00",
        updated_at: "2024-07-15T05:36:53+00:00",
      },
      {
        id: "66feefe85869bb84deac21c5",
        sent_from: "66568f855c7fbccd6f822f0f",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p9c57d2ae80244ba1b9fed38ecd659103",
          username: "PsychicMidget69",
          avatar: { name: "Batman 2", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/batman-2.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-10-03T19:26:32+00:00",
        updated_at: "2024-10-03T19:26:32+00:00",
      },
      {
        id: "668ae12980583b08ca6ee9a4",
        sent_from: "62887bccbd62b113c86f5c37",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p4a0f385499e54e3d90494e08ad4682fe",
          username: "AlienTheOne",
          avatar: {
            name: "MultiVersus Superman",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-superman.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-07T18:40:41+00:00",
        updated_at: "2024-07-07T18:40:41+00:00",
      },
      {
        id: "66935065e636cd5af270613b",
        sent_from: "62db71723e25a3ddd34c829a",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p0dcc010f8b4d4643870440cf80d112a3",
          username: "mahoraga998",
          avatar: {
            name: "MultiVersus Tom and Jerry",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-tom-and-jerry.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-14T04:13:25+00:00",
        updated_at: "2024-07-14T04:13:25+00:00",
      },
      {
        id: "66999e9a94176cf05ae3cbec",
        sent_from: "6286c24413faa93681856fa4",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p77ee627bd1464a30a24d58dcbbb80398",
          username: "poptue1242",
          avatar: { name: "MultiVersus Finn", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-finn.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-18T23:00:42+00:00",
        updated_at: "2024-07-18T23:00:42+00:00",
      },
      {
        id: "6692f376fbfddc4c748dcf82",
        sent_from: "628e548c437df248552110f0",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p940ac7baea76478e980a09c97e25687c",
          username: "Iocations",
          avatar: { name: "Harley Quin", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/harley-quinn.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-13T21:36:54+00:00",
        updated_at: "2024-07-13T21:36:54+00:00",
      },
      {
        id: "66a47582ec3bbcc52f9a6c3d",
        sent_from: "627fd05054a43ae78695c73c",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p8db519fdcccf49dc8b7c0516454d0715",
          username: "CorneliusBeefHash",
          avatar: { name: "Hell Boy", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/hellboy.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-27T04:20:18+00:00",
        updated_at: "2024-07-27T04:20:18+00:00",
      },
      {
        id: "66961cf2dd81fe589a5207dc",
        sent_from: "66591bd42028dd1bdf852bda",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p90c139d0f6cc475bb300e8ba730c6088",
          username: "KleptoManiaSFC",
          avatar: { name: "Scorpion", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/scorpion.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-16T07:10:42+00:00",
        updated_at: "2024-07-16T07:10:42+00:00",
      },
      {
        id: "669e43eac2781ee6123f284d",
        sent_from: "6283c1b88f8cd50ecbaa6528",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p061711fe7f104c39b781596fcc9b893b",
          username: "BiscuitBoy",
          avatar: { name: "Harley Quin", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/harley-quinn.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-22T11:35:06+00:00",
        updated_at: "2024-07-22T11:35:06+00:00",
      },
      {
        id: "66c40b594ae7772caea592bf",
        sent_from: "62e1de16173f797e1bcbd43d",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p95bec5e924ad490984c9b8e1a5d915f7",
          username: "Reynaldo714",
          avatar: { name: "Hell Boy", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/hellboy.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-08-20T03:19:53+00:00",
        updated_at: "2024-08-20T03:19:53+00:00",
      },
      {
        id: "6689b654c86ffbf27e5be764",
        sent_from: "63002bd71bb042bed96d471e",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p7889ece1a9e24a1d92abbe92c418b93d",
          username: "Hindex",
          avatar: {
            name: "MultiVersus Superman",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-superman.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-06T21:25:40+00:00",
        updated_at: "2024-07-06T21:25:40+00:00",
      },
      {
        id: "672e5523369aefe137785ff0",
        sent_from: "62e5e0f20f7fd3f06855557b",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p96042d379f704f7a8fb89fa49be4b989",
          username: "NotRaidedRekt",
          avatar: {
            name: "MultiVersus Wonder Woman",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-wonder-woman.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-11-08T18:14:59+00:00",
        updated_at: "2024-11-08T18:14:59+00:00",
      },
      {
        id: "66ab3bdb0698930996b599ba",
        sent_from: "628aad51756eda5cfe023aed",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p7de45e00279c4d7297bc7a1d6da06aba",
          username: "Almunai",
          avatar: {
            name: "MultiVersus Harley Quinn",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-harley-quinn.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-08-01T07:40:11+00:00",
        updated_at: "2024-08-01T07:40:11+00:00",
      },
      {
        id: "668cdc158081572ee928b40e",
        sent_from: "66754b8ac42a77c9b345202a",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p30cdb8b3d2984a0281cdb7f3b34f217d",
          username: "fatalTom",
          avatar: {
            name: "MultiVersus Shaggy",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-shaggy.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-09T06:43:33+00:00",
        updated_at: "2024-07-09T06:43:33+00:00",
      },
      {
        id: "66998be0fd6ceea5451da05c",
        sent_from: "6660ee1abad522b6218b6ee6",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pe8a8adf5bbc94f0fa95ee5328b80137b",
          username: "INMORTALDARK2000",
          avatar: { name: "Batman 3", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/batman-3.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-18T21:40:48+00:00",
        updated_at: "2024-07-18T21:40:48+00:00",
      },
      {
        id: "668c7a860c3257ea9441ad37",
        sent_from: "62887b8d86d5f8dbc840e304",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "p7e028ead8d444fe9b630f1ea7b6ca6b2",
          username: "xCraftyyNoss",
          avatar: { name: "Harley Quin", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/harley-quinn.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-08T23:47:18+00:00",
        updated_at: "2024-07-08T23:47:18+00:00",
      },
      {
        id: "6693669cda6d05f5953ff5dd",
        sent_from: "62e36411f613b34c787db677",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pbb51f9a66589458b9707556598aae837",
          username: "jamfamogTV",
          avatar: {
            name: "MultiVersus Batman",
            image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-batman.jpg",
          },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-14T05:48:12+00:00",
        updated_at: "2024-07-14T05:48:12+00:00",
      },
      {
        id: "66989a6067adcaaa0ae97ada",
        sent_from: "62d8237631ed53325392382f",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pa3eae10471614b69a61213562ad13246",
          username: "KOBLowkey",
          avatar: { name: "MultiVersus Jake", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/multiversus-jake.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-18T04:30:24+00:00",
        updated_at: "2024-07-18T04:30:24+00:00",
      },
      {
        id: "669a03711d08a8aa31cc641c",
        sent_from: "65eb8b3b786325252c15aef2",
        sent_to: "63cef97ccaf1cd11f09a765b",
        account: {
          public_id: "pad851be948bc4e6a92cbdfec1146bf91",
          username: "SaffronSmall683",
          avatar: { name: "Brainiac", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/brainiac.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2024-07-19T06:10:57+00:00",
        updated_at: "2024-07-19T06:10:57+00:00",
      },
    ],
  });
}

export async function handleFriends_me_invitations_outgoing(
  req: Request<{}, {}, {}, MVSQueries.Friends_me_invitations_outgoing_QUERY>,
  res: Response,
) {
  res.send({
    total: 1,
    page: 1,
    page_size: 1000,
    results: [
      {
        id: "67cf0b8f59e56837868f0a0b",
        sent_from: "63cef97ccaf1cd11f09a765b",
        sent_to: "62ea88998c829ee13fa0f84a",
        account: {
          public_id: "p39b6ef94a0ad40e29ed342f99f40e2db",
          username: "F22bomber",
          avatar: { name: "Batman 3", image_url: "https://prod-network-images.wbagora.com/network/account-wbgames-com/batman-3.jpg" },
          presence_state: 0,
        },
        state: "open",
        created_at: "2025-03-10T15:55:59+00:00",
        updated_at: "2025-03-10T15:55:59+00:00",
      },
    ],
  });
}
