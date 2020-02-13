const express = require('express');
const path = require('path');
const apiCall = require('./Controllers/RequestService');
const leg = require('./Controllers/LeagueService');
const errorHandler = require('./Controllers/ErrorHandler');
const app = express();
app.set('port', 3000);
app.disable('x-powered-by');
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
);

app.get('/leagues/:country', (req, res) => {
  console.log(req.params.country);


 

  // apiCall(
  //   `https://api-football-v1.p.rapidapi.com/v2/leagues/type/league/${req.params.country}/2018`,
  //   (a, b, c) => res.send(leg(a, b, c))
  // );



  res.send(//https://api-football-v1.p.rapidapi.com/v2/leagues/type/league/spain/2018
    {
        "api": {
            "results": 3,
            "leagues": [
                {
                    "league_id": 87,
                    "name": "Primera Division",
                    "type": "League",
                    "country": "Spain",
                    "country_code": "ES",
                    "season": 2018,
                    "season_start": "2018-08-17",
                    "season_end": "2019-05-19",
                    "logo": "https://media.api-football.com/leagues/87.png",
                    "flag": "https://media.api-football.com/flags/es.svg",
                    "standings": 1,
                    "is_current": 0,
                    "coverage": {
                        "standings": true,
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics": true,
                            "players_statistics": true
                        },
                        "players": true,
                        "topScorers": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "league_id": 88,
                    "name": "Segunda Division",
                    "type": "League",
                    "country": "Spain",
                    "country_code": "ES",
                    "season": 2018,
                    "season_start": "2018-08-17",
                    "season_end": "2019-06-16",
                    "logo": "https://media.api-football.com/leagues/88.jpg",
                    "flag": "https://media.api-football.com/flags/es.svg",
                    "standings": 1,
                    "is_current": 0,
                    "coverage": {
                        "standings": true,
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics": true,
                            "players_statistics": true
                        },
                        "players": true,
                        "topScorers": true,
                        "predictions": true,
                        "odds": false
                    }
                },
                {
                    "league_id": 237,
                    "name": "Primera Division Women",
                    "type": "League",
                    "country": "Spain",
                    "country_code": "ES",
                    "season": 2018,
                    "season_start": "2018-09-08",
                    "season_end": "2019-05-05",
                    "logo": "https://media.api-football.com/leagues/237.png",
                    "flag": "https://media.api-football.com/flags/es.svg",
                    "standings": 1,
                    "is_current": 0,
                    "coverage": {
                        "standings": true,
                        "fixtures": {
                            "events": true,
                            "lineups": true,
                            "statistics": false,
                            "players_statistics": false
                        },
                        "players": false,
                        "topScorers": false,
                        "predictions": true,
                        "odds": false
                    }
                }
            ]
        }
    }
    )





});


app.get('/leagues/:country/season/:season',(req,res)=>{

  console.log("hi seasio : ", req.params.season , "country  : " ,req.params.country )

  apiCall(
    `https://api-football-v1.p.rapidapi.com/v2/leagues/type/league/${req.params.country}/${req.params.season}`,
    (a, b, c) => res.send(leg(a, b, c)));

})

app.get('/leagues/teams/:leagueId',(req,res)=>{
console.log("Get  :" , req.params.leagueId)
  
    res.sendFile(path.join(__dirname, '..', 'public','leages-teams.html'))
})




app.post('/leagues/teams/:leagueId',(req,res) =>{
    console.log("post  :" , req.params.leagueId)

  apiCall(
        `https://api-football-v1.p.rapidapi.com/v2/teams/league/${req.params.leagueId}`,
        (a, b, c) => res.send(leg(a, b, c)));








})


app.use(errorHandler.error404);
app.use(errorHandler.error500);

app.listen(app.get('port'), () =>
  console.log(`the Server in running ${app.get('port')}`)
);
