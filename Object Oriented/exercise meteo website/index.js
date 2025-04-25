
//var place = "Boumerdes"
let axios = window.axios

document.getElementById("button").addEventListener("click", async() => {
    //var place = document.getElementById("search").value
    var place = "boumerdes"
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8d1c8bf5baa3f53b4fdd39f067c5b3f6`)
    console.log(data);

    console.log(data.weather[0].main);
    if(data.weather[0].main == "Clear"){
        document.getElementById("div_icon").innerHTML = `<img src="images/clear.png" alt="" class="w-[60%] m-auto">
            <img src="images/cloud.png" alt="" class="hidden">
            <img src="images/rain.png" alt="" class="hidden">
            <img src="images/snow.png" alt="" class="hidden">`
    }
    else if(data.weather[0].main == "Clouds"){
        document.getElementById("div_icon").innerHTML = `<img src="images/clear.png" alt="" class="hidden">
            <img src="images/cloud.png" alt="" class="w-[60%] m-auto">
            <img src="images/rain.png" alt="" class="hidden">
            <img src="images/snow.png" alt="" class="hidden">`
    }
    else if(data.weather[0].main == "Rain"){
        document.getElementById("div_icon").innerHTML = `<img src="images/clear.png" alt="" class="hidden">
            <img src="images/cloud.png" alt="" class="hidden">
            <img src="images/rain.png" alt="" class="w-[60%] m-auto">
            <img src="images/snow.png" alt="" class="hidden">`
    }
    if(data.weather[0].main == "Snow"){
        document.getElementById("div_icon").innerHTML = `<img src="images/clear.png" alt="" class="hidden">
            <img src="images/cloud.png" alt="" class="hidden">
            <img src="images/rain.png" alt="" class="hidden">
            <img src="images/snow.png" alt="" class="w-[60%] m-auto">`
    }

    document.getElementById("div_placeTemp").innerHTML = `<h1 id="temperature">${parseInt(data.main.temp - 273.15)}<span><sup>°C</sup></span></h1>
                                                            <p id="city">${place}</p>`

    document.getElementById("div_humidity").innerHTML = `<i class="fa-solid fa-wind text-3xl text-white"></i>
                                                        <p id="city">${data.main.humidity}<br>humidity</p>`
    
    document.getElementById("div_wind").innerHTML = `<i class="fa-solid fa-water text-3xl text-white"></i>
                                                        <p id="city">${data.wind.speed}<br>wind speed</p>`

})


/*{
    "coord": {
        "lon": 3.4706,
        "lat": 36.7589
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 297.03,
        "feels_like": 296.73,
        "temp_min": 297.03,
        "temp_max": 297.03,
        "pressure": 1018,
        "humidity": 48,
        "sea_level": 1018,
        "grnd_level": 1006
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.18,
        "deg": 329,
        "gust": 2.41
    },
    "clouds": {
        "all": 5
    },
    "dt": 1731851234,
    "sys": {
        "type": 1,
        "id": 1060,
        "country": "DZ",
        "sunrise": 1731824800,
        "sunset": 1731861355
    },
    "timezone": 3600,
    "id": 2474141,
    "name": "Boumerdes",
    "cod": 200
}*/




