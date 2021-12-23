const httpResponses = require("../helpers/responses");

module.exports.getUser = async (event) => {
  console.log("event.pathParameters", event.pathParameters);

  const userId = event.pathParameters.id;

  if (!userId) {
    return httpResponses._200(userData);
  }

  const user = userData.find((u) => u.id == userId);
  if (user) {
    return httpResponses._200(user);
  }

  return httpResponses._200(userData);
};

const userData = [
  {
    id: 201,
    name: "Paul Bryant",
    address: "NZ",
  },
  {
    id: 202,
    name: "James Pott",
    address: "AUS",
  },
  {
    id: 203,
    name: "Justin Lazaro",
    address: "Pheleppines",
  },
];
