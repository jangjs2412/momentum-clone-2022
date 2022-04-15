const API_KEY = "38453868463cc6e6a55e6838944c25d8";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    //자바스크립트가 url을 부름.
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
    });
}

function onGeoError() {
    alert("Can't Find You. No Weather For You");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);