const routes = require("./routes");

module.exports = (req, res) => {
  const route = routes[req.url];

  if (route) {
    return route(req, res);
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Rota n&atilde;o encontrada");
};
/*
module.exports = (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("API funcionando");
  }

  if (req.url === "/status") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Rota não encontrada");
};
*/