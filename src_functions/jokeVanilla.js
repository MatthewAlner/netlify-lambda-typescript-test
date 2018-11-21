var request = require("request-promise-native");

const API_ENDPOINT =
  "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke";

exports.handler = async (event, context) => {

  return request.get(API_ENDPOINT)
    .then(response => {
      let data = JSON.parse(response);
      return {
        statusCode: 200,
        body: JSON.stringify({
          joke: `${data.setup} ___ ${data.punchline}`
        })
      }
    })
    .catch(error => ({
      statusCode: 422,
      body: String(error)
    }));
};
