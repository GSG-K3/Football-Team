import { json } from "express"

let listoption = document.getElementById('football')
let menu = document.getElementById('Comptition')



let url =  'api-football-v1.p.rapidapi.com/v2/leagues/type/league/spain/2018' //country=${country}

let apicall = (method, url, callback) => {
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
         
           // the Json Pares move to Callback
           const response = xhr.responseText

            if (callback) {
                callback(response);
            }
        }
    }
    xhr.open(method, url)
    xhr.send();

}
menu.addEventListener('change', (e)=>{
    let val = e.target.value
    
    
    apicall("GET",`/leagues/${val}`,(res)=>{
        console.log(res)
        let data = JSON.parse(res);
        data.forEach((item)=>{
           let comp = document.createElement("option")
           comp.href = item.url
           data.appendChild(comp)  
           
        })
       
       })
   
    
    // array3.forEach ((item)=>{
    //     //    <option value="fotbool2013">football2013</option>
    //  let o = document.createElement("option")
    //  o.setAttribute("value",item)
    //  o.innerHTML= item
    //  data.appendChild(o)
    // })
    


})




