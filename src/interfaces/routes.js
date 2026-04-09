const getStatus = require("../application/getStatus");

module.exports = {
  "/": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("API funcionando");
  },

  "/status": async (req, res) => {
    const result = await getStatus();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  },
};
/*
module.exports = {
  "/": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("API funcionando");
  },

  "/status": (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
  },
};
*/