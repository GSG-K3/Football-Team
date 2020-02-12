let listoption = document.getElementById('football');
let county = document.getElementById('Comptition');
let CompetitionsSeason = document.getElementById('Competitions-season');

const xhr = new XMLHttpRequest();
let apicall = (method, url, callback) => {
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      // the Json Pares move to Callback
      const response = xhr.responseText;
      if (callback) {
        callback(response);
      }
    }
  };
  xhr.open(method, url);
  xhr.send();
};

county.addEventListener('change', e => {
  let countyVal = e.target.value;

  if(countyVal ==='0')
  {
    CompetitionsSeason.classList.add("hide");
    alert("please choose the County");
    return;
  }
  CompetitionsSeason.classList.add("show");
  
  apicall('GET', `/leagues/${countyVal}`, res => {
    console.log(JSON.parse(res));
    let data = JSON.parse(res).api.leagues;
    console.log(data);
    createRowTabble(data)
  });
});



CompetitionsSeason.addEventListener('change', e => {
  let season = e.target.value;
  let countyVal = county.value;
  
  apicall('GET', `/leagues/${countyVal}/season/${season}`, res => {
    console.log(res);
    let data = JSON.parse(res).api.leagues;
    console.log(data);
    createRowTabble(data)
  });
});



function createRowTabble (data)
{
  if(data === undefined) return;
  if(!Array.isArray(data)) return
  if(data.length ==0) return;

  const tbody = document.getElementById('tbcontant');
  tbody.innerHTML = null;
  data.forEach(league => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.classList.add("col-40-1");
    
  
    const teamLink = document.createElement('a')
    
    teamLink.setAttribute("href", `/leagues/teams/${league.league_id}`);
    
    const span = document.createElement("span");
    span.innerText = league.name;
  
    const imgdiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = league.logo;
    img.setAttribute("alt", league.name);
  
  
    imgdiv.appendChild(img);
    teamLink.appendChild(imgdiv);
    teamLink.appendChild(span);
    td1.appendChild(teamLink);
  
    const td2 = document.createElement("td");
    td2.classList.add("col-33");
    td2.classList.add("text-center");
    const span2 = document.createElement("span");
    span2.innerText = league.season_start + " / " + league.season_end;
    td2.appendChild(span2);
  
    tr.appendChild(td1);
    tr.appendChild(td2);
  
    tbody.appendChild(tr);
  });
}
