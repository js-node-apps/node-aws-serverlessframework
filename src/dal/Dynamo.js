const AWS = require("aws-sdk");

const documentClient = new AWS.DynamoDB.DocumentClient();

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
};

module.exports = Dynamo;
