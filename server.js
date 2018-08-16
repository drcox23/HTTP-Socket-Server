const net = require("net");
const PORT = 8080;
const { error } = require("./assets/404.js");
const { helium } = require("./assets/helium.js");
const { hydrogen } = require("./assets/hydrogen.js");
const { index } = require("./assets/index.js");
const { css } = require("./assets/styles.js");

// console.log(process.argv);

const server = net.createServer(client => {
  client.setEncoding("utf8");
  client.on("data", data => {
    console.log(data);
    let req = data.toString().split("\n");
    let reqLine = req[0].split(" ");
    let uri = reqLine[1];

    const date = new Date();
    const status = "HTTP/1.1 200 OK"; // it's all good
    const serverName = "coolServer"; // whatever server

    console.log(uri);

    if (uri === "/helium") {

      const message = `${status}\n Server: ${serverName}\n Date: ${date}\n Content-Type: text/html\n\n${helium}`;

      client.write(message);
      client.end();
    } else if (uri === "/hydrogen") {
      const message = `${status}\n Server: ${serverName}\n Date: ${date}\n Content-Type: text/html\n\n${hydrogen}`;

      client.write(message);
      client.end();
    } else if (uri === "/index" || uri === "/") {
      const message = `${status}\n Server: ${serverName}\n Date: ${date}\n Content-Type: text/html\n\n${index}`;

      client.write(message);
      client.end();
    } else if (uri === "/404") {
      const message = `${status}\n Server: ${serverName}\n Date: ${date}\n Content-Type: text/html\n\n${error}`;

      client.write(message);
      client.end();
    } else if (uri === "/css/styles.css") {


      const message = `${status}\nServer: ${serverName}\n Date: ${date}\n Content-Type: text/css\n\n${css}`;

      client.write(message);
      client.end;
    }

  });
});

server.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
