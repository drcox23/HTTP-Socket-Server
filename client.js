const net = require("net");

const client = net.createConnection(8080, "", () => {
  console.log("Connect");
});
