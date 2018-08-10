const net = require("net");

const server = net.createServer(client => {
  client.on("data", data => {
    const msg = data.toString();

    if (msg.includes("GET")) {
    }
  });
});

server.listen(8080, () => {
  console.log("server is listening on port 8080");
});
