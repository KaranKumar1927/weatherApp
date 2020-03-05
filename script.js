
async function fetchWeatherData(location) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=dfd43713cf650e2f357ed4a4925afd8e`, { mode: 'cors' })
  const jsonData = (response.status == 200) ? await response.json() : alert("location not found")
  return jsonData;
}

async function Displays(location) {
  let jsonData = await fetchWeatherData(location)


  //  creates table rows
  const  cliRow=document.createElement("tr")
  const loct= document.createElement("td")
  const tfer= document.createElement("td")
  const tcel = document.createElement("td")
  const humid = document.createElement("td")
  const wSpeed = document.createElement("td")
  const Cont = document.createElement("td")
  const sStatus= document.createElement("td")
 

  
  

  let fahrenTemp =Math.round((jsonData.main.temp- 273.15) * (9 / 5) + 32);
  let CelciusTemp = Math.round((jsonData.main.temp-273.15));
  let WSpeed=Math.round(jsonData.wind.speed*(18/5))
  tfer.innerHTML = ` ${fahrenTemp}\u00B0F`
  tcel.innerHTML = ` ${CelciusTemp}\u00B0C`
  humid.innerHTML = `${jsonData.main.humidity}%`
  wSpeed.innerHTML = `${WSpeed}Km/hr`
  loct.innerHTML = `${jsonData.name}`;
  Cont.innerHTML=`${jsonData.sys.country}`
  sStatus.innerHTML= ` ${jsonData.weather[0].main}`;

  

  cliRow.appendChild(loct)
  cliRow.appendChild(tcel)
  cliRow.appendChild(tfer)
 
  cliRow.appendChild(humid)
  cliRow.appendChild(wSpeed)
  cliRow.appendChild(Cont)
  cliRow.appendChild(sStatus)
  document.querySelector("#p").appendChild(cliRow)

  document.querySelector("#p").removeAttribute("style") 
  
  if(`${jsonData.weather[0].main}` == ('Haze')){

    document.getElementById("p").style.backgroundImage = "url(https://footage.framepool.com/shotimg/qf/611008531-parco-naturale-dello-spessart-sorgere-del-sole-foschia-riserva-naturale.jpg)";
    document.getElementById("p").style.backgroundSize = " cover"
  }


  if(`${jsonData.weather[0].main}` == 'Rain'){

    document.getElementById("p").style.backgroundImage = "url(https://www.walb.com/resizer/KELXtoJxuQxrmiPckeqCzQNDXOo=/1200x600/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/O3UT3XSDMFHV7F2SJB6IA7IN2A.jpg)";
    document.getElementById("p").style.backgroundSize = " cover"
    document.getElementById("p").style.color ="white"
  }

  if(`${jsonData.weather[0].main}` == 'Clouds'){

    document.getElementById("p").style.backgroundImage = "url(https://s3.envato.com/files/238675315/preview.jpg)"
    document.getElementById("p").style.backgroundSize = "cover"
  }

  if(`${jsonData.weather[0].main}` == 'Clear'){

    document.getElementById("p").style.backgroundImage = "url(https://lh3.googleusercontent.com/cCDc3xGUHZ00B5jJoTAK1twF4alRJdqYOseCvZs66wItTlSojz92a5Cqc5qizQe0HFMAm3579cFjMXhundzK6pkCQcDqv1Ie)"
    document.getElementById("p").style.backgroundSize = "cover"
  }

  if(`${jsonData.weather[0].main}` == ('Fog' || 'Mist')){

    document.getElementById("p").style.backgroundImage = "url(https://st.focusedcollection.com/13397678/i/1800/focused_169050128-stock-photo-landscape-winter-foggy-weather.jpg)"
    document.getElementById("p").style.backgroundSize = "cover"
  }
  
  if(`${jsonData.weather[0].main}` == ('Smoke')){

    document.getElementById("p").style.backgroundImage = "url(https://static.toiimg.com/thumb/msid-66779143,imgsize-88040,width-400,resizemode-4/66779143.jpg)"
    document.getElementById("p").style.backgroundRepeat = "no-repeat"
    document.getElementById("p").style.backgroundSize ="100% 100%"
  }
    
  
 document.querySelector('#BackButton').onclick = () =>{

   cliRow.remove();
   var y= document.querySelector("#p");
   y.setAttribute("style","display:none");
  var x= document.querySelector(".input-container") 
  x.setAttribute("Style","display:inline") 
  var z=document.querySelector("#BackButton") 
  z.setAttribute("style","display:none")
  document.querySelector('#search-city').value="";

  }
  
}

const search = () =>{
  cityField = document.querySelector('#search-city');
  let city = this.cityField.value;

  if(city==''){
       
    
      alert("Please fill the city field")
      document.querySelector("#BackButton").removeAttribute("style") 
    
    }
    else{
    let formattedLocation = city;
    return formattedLocation
}
}



    document.querySelector('#search-submit').onclick = () => {
      let location = search();
      var check = /[1-9]/g;
      var result = location.match(check);
      if(result == null){

        document.querySelector("#BackButton").removeAttribute("style") 
        var y= document.querySelector(".input-container");
        y.setAttribute("style","display:none");   
   
      
         Displays(location)
        
      }
      else{
        alert("City Name Cannot have numbers in them")
        document.querySelector('#search-city').value=""

      
      }
    }  
    
    document.getElementById("h").style.backgroundColor="orange" 




