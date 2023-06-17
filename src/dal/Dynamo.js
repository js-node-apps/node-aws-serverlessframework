const AWS = require("aws-sdk");

const isOffline = process.env.IS_OFFLINE;

let options = {};
if (isOffline) {

  console.log('*************************** Running offline ***************************')
  options = {
    region: "localhost",
    endpoint: "http://localhost:8000",
  };
}

const documentClient = new AWS.DynamoDB.DocumentClient(options);

const Dynamo = {
  async get(ID, TableName) {
    const params = {
      TableName,
      Key: { ID },
    };

    const data = await documentClient.get(params).promise();

    if (!data) {
      throw Error("Invalid ID");
    }

    return data.Item;
  },

  async write(data, TableName) {
    const params = {
      TableName,
      Item: data,
    };

    console.log("params - ", params);

    const user = await documentClient.put(params).promise();

    console.log("saved user - ", user);

    if (!user) {
      throw Error("Error occurred");
    }

    return user;
  },
};

module.exports = Dynamo;
