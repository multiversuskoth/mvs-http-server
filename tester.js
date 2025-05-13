const buf = Buffer.from('73333300', 'hex');
console.log(buf.readFloatLE(0)); // Outputs: 0.45