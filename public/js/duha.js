let table =document.getElementById('table');
const leagues =  [
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


const tbody = document.getElementById('tbcontant')

/*
<tr>
            <td class="col-40-1">Primera Division 
            <img src="https://media.api-football.com/leagues/87.png" alt="logo"></td>
            <td class="col-33">2018-08-17/2019-05-19</td>
            <td class="col-33"></td>
          </tr>

*/ 


leagues.forEach(league => {
    

     const tr =document.createElement('tr')
     
     const td1 =document.createElement('td')
     td1.classList.add('col-40-1')
     const span = document.createElement('a')
     span.setAttribute('href',`/leagues/teams/${league.league_id}`)
     span.innerText = league.name;
     
     td1.appendChild(span)
     
     const img = document.createElement('img');
     img.src = league.logo;
     img.setAttribute('alt','logo')
     td1.appendChild(img)
     

      
     const td2 =document.createElement('td')
     td2.classList.add('col-33')
     const span2 = document.createElement('span')
     span2.innerText = league.season_start +" / "+league.season_end;
     td2.appendChild(span2)
     
     

     tr.appendChild(td1)
     tr.appendChild(td2)
     
     
    tbody.appendChild(tr)

    }
);

