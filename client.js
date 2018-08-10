const net = require("net");

const client = net.createConnection(8080, "", () => {
  console.log("Connect");
});

client.on("data", data => {
  console.log(data.toString());
});

process.stdin.pipe(client);
