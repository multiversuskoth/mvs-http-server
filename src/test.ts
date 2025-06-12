import { connect } from "./database/client";
import { PlayerTesterModel } from "./database/PlayerTester";
import 'reflect-metadata';
connect().then(async ()=>{
  console.log("CONNECTED MONGO")
  let players = await PlayerTesterModel.find();
  console.log(players.map(p=>p.toJSON()))
        let player = await PlayerTesterModel.findById( "684afc1779bbfe710ca1295b" );
        console.log(player?.toJSON())
})