const httpResponses = require("../helpers/responses");
const Dynamo = require("../dal/Dynamo");
const userData = require("../helpers/userData");

module.exports.getStaticUser = async (event) => {
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

module.exports.getUser = async (event) => {
  console.log("event", event.body);

  console.log("event.pathParameters.ID", event.pathParameters.id);

  if (!event.pathParameters || !event.pathParameters.id) {
    return httpResponses._400({}, 400, "User id expected");
  }

  const tableName = process.env.tableName;

  const userData = await Dynamo.get(event.pathParameters.id, tableName).catch(
    (err) => {
      console.log("Error occurred, cannot read user record");

      return null;
    }
  );

  if (!userData) {
    return httpResponses._200({ userData });
  }
};

module.exports.createUser = async event => {

  const user = JSON.parse(event.body);

  const tableName = process.env.tableName;

  const newUser = await Dynamo.write(user, tableName).catch(err => {
    console.log('error ', err);
    return null;
  });

  return httpResponses._200({ newUser });
}
