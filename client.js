const net = require("net");


const client = net.createConnection(8080, "10.0.1.148", () => {
  console.log("Suck it");
  // let httpArr = ["/index.html", "/hydrogen.html", "/helium.html", "/404.html", "/css/styles.css"];
  // client.write("GET" + httpArr)

});

client.on("data", data => {
  console.log(data.toString());
});

process.stdin.pipe(client);
