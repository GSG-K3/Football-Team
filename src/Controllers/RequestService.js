const request = require('request');

const apiCall = (remotUrl, callback) => {
  console.log(remotUrl);

  const options = {
    url: remotUrl,
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': 'ebbdffef82msh4220b78cd4635c3p115d66jsn4859aa085'
    }
  };
  console.log(options);
  request(options, callback);
};

module.exports = apiCall;
