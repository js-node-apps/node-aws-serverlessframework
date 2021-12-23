const httpResponses = {
  _200(data = {}) {
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      statuscode: 200,
      body: JSON.stringify(data),
    };
  },
  _400(data = {}) {
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      statuscode: 400,
      body: JSON.stringify(data),
    };
  },
};

module.exports = httpResponses;
