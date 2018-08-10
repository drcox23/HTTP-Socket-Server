const server = net.createServer(client => {});

server.listen(8080, () => {
  console.log("server is listening");
});
