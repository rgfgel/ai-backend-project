module.exports = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("API funcionando com handler");
};