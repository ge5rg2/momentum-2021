const API_KEY = "30185d52b652568e52c00a1a13ede32f";
const refresh = document.querySelector("#weather-refresh");
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    })
    weatherRefresh();
    localStorage.setItem("latitude", lat);
    localStorage.setItem("longitude", lon);
  }

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

function weatherRefresh() {
  refresh.classList.remove("hidden");
  const refreshIcon = document.querySelector(".fa-sync-alt");
  refreshIcon.addEventListener("click", refreshBtn);
}

function refreshBtn(event) {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

const latitude = localStorage.getItem("latitude");
const longitude = localStorage.getItem("longitude");
if(latitude !== null && longitude !== null) {
  const loadUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(loadUrl).then(response => response.json()).then(data =>{
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
  })
  weatherRefresh();
} else {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}