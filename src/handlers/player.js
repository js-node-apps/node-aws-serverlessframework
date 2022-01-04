const httpResponses = require("../helpers/responses");

module.exports.getPlayer = async (event) => {
  console.log("event", event.path);

  const res = {
    name: "Bret Lee",
    role: "fast bowler",
    country: "Australia",
  };

  return httpResponses._200({ res });
};
