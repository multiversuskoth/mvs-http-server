

import * as dgram from "dgram";
// creating a client socket
var client = dgram.createSocket('udp4');

//buffer msg
var data = Buffer.from('siddheshrane');

client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

//sending msg
client.send(data,41234,'127.0.0.1',function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});