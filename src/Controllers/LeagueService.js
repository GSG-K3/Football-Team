const leagueOfCuntry = (error, response, body) => {
  //if (!error && response.statusCode == 200) {
  console.log('inside respons');

  const info = JSON.parse(body);

  console.log(info);
  //console.log(info.stargazers_count + " Stars");
  //console.log(info.forks_count + " Forks");
  //}
};

module.exports = leagueOfCuntry;
