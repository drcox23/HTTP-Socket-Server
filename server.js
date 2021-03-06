const net = require("net");
const PORT = 8080;
const { index, hydrogen, helium, error, css } = require("./assets.js");

const server = net.createServer(client => {
  client.setEncoding("utf8");
  client.on("data", data => {
    let req = data.toString().split("\n");
    let reqLine = req[0].split(" ");
    let uri = reqLine[1];

    const date = new Date();
    const status = "HTTP/1.1 200 OK"; // it's all good
    const serverName = "coolServer"; // whatever server

    if (uri === "/") {
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${index}`;

      client.write(message);
      client.end();

    } else if (uri === "/helium.html") {
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${helium}`;

      client.write(message);
      client.end();

    } else if (uri === "/hydrogen.html") {
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${hydrogen}`;

      client.write(message);
      client.end();

    } else if (uri === "/css/styles.css") {
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: text/css\n\n${css}`;

      client.write(message);
      client.end;

    } else {
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${error}`;

      client.write(message);
      client.end();
    }
  });
});

server.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
