const aiClient = require("../infrastructure/aiClient");

module.exports = async () => {
  const message = await aiClient.getMessage();

  return {
    status: "ok",
    ai: message,
  };
};