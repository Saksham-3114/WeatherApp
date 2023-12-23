let xhr = new XMLHttpRequest();
let city
let hero = document.querySelector(".hero1");
let card = document.querySelector(".card");
let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let bar =  document.getElementById("h_bar");
let btn = document.getElementById("h_btn");

bar.addEventListener("keyup",(ev)=>{
    city=ev.target.value;
})

xhr.onload = function(){
    let jsondata = this.response;
    let weatherObj = JSON.parse(jsondata);
    console.log(weatherObj);
    Object.assign(document.body.style,{backgroundImage:"url('./bg3.jpg')",backgroundSize:"cover"});
    Object.assign(document.body.style,{backgroundColor:"rgba(52, 61, 75,1)",width:"100%",height:"100%"});
    card.style.display="flex";
    // functionDate();
    document.querySelector("#day").appendChild(document.createTextNode(`${weatherObj.name}`));
    document.querySelector("#date").appendChild(document.createTextNode(`${weatherObj.sys.country}`));
    document.querySelector("#place").appendChild(document.createTextNode(`Lat: ${weatherObj.coord.lat}  ,  Lon: ${weatherObj.coord.lon}`));
    document.querySelector("#temp").appendChild(document.createTextNode(`${((weatherObj.main.temp)-273.15).toFixed(2)}°C`));
    document.querySelector("#weather").appendChild(document.createTextNode(`${weatherObj.weather[0].main}`));

    document.querySelector("#feel").appendChild(document.createTextNode(`${((weatherObj.main.feels_like)-273.15).toFixed(2)}°C`));
    document.querySelector("#humid").appendChild(document.createTextNode(`${weatherObj.main.humidity}`));
    document.querySelector("#press").appendChild(document.createTextNode(`${weatherObj.main.pressure}`));
    document.querySelector("#min").appendChild(document.createTextNode(`${((weatherObj.main.temp_min)-273.15).toFixed(2)}°C`));
    document.querySelector("#max").appendChild(document.createTextNode(`${((weatherObj.main.temp_max)-273.15).toFixed(2)}°C`));
    document.querySelector("#wind").appendChild(document.createTextNode(`${weatherObj.wind.speed}`));
}

xhr.onerror = function(){
    console.log("error");
}

btn.addEventListener("click",(e)=>{
    xhr.open("get",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66c4df1ec9e7ffc84e403cd0f77dd5eb`);
    xhr.send();
    document.querySelector("#day").innerHTML="";
    document.querySelector("#date").innerHTML="";
    document.querySelector("#place").innerHTML="";
    document.querySelector("#temp").innerHTML="";
    document.querySelector("#weather").innerHTML="";

    document.querySelector("#feel").innerHTML="";
    document.querySelector("#humid").innerHTML="";
    document.querySelector("#press").innerHTML="";
    document.querySelector("#min").innerHTML="";
    document.querySelector("#max").innerHTML="";
    document.querySelector("#wind").innerHTML="";
    document.body.removeChild(hero);
    console.log(bar.target.value);
})

