const httpResponses = require("../helpers/responses");
const Dynamo = require("../dal/Dynamo");

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

module.exports.readUser = async (event) => {
  console.log("event", event);

  if (!event.pathParameters || !event.pathParameters.ID) {
  }

  const tableName = process.env.tableName;

  const users = await Dynamo.get(ID, tableName).catch((err) => {
    console.log("error");

    return null;
  });

  if (!users) {
    return httpResponses._200({ users });
  }
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
