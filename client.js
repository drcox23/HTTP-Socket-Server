const net = require("net");


const client = net.createConnection(8080, "10.0.1.148", () => {
  client.on("data", data => {
    console.log(data.toString())
  })
  process.stdin.pipe(client);
});


