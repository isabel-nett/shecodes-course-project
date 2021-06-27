function formatDate() {
  let now = new Date();
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = daysOfWeek[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();

  todayDate = document.getElementById("todayDate");
  todayDate.innerHTML=(day + " " + hour + ":" + minutes);
}

formatDate();

let searchBox = document.getElementById("searchBox");
let searchButton = document.getElementById("searchButton");
let temperature = document.getElementById("temperature");
let cityName = document.getElementById("cityOutput");
let currentLocation = document.getElementById("currentLocation");

function searchCity() {
  console.log("searchCity is working")
  let city = searchBox.value  
  let apiKey = "25174e4a6986b7dcdd6d3651f3f8973a";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function searchCurrent(position) {
  console.log("searchPosition is working")
  let apiKey = "25174e4a6986b7dcdd6d3651f3f8973a";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  let currentTemp = Math.round(response.data.main.temp);
  temperature.innerHTML = (currentTemp);
  cityName.innerHTML = response.data.name;
}

document.querySelector('#searchButton').addEventListener("click", searchCity);
document.querySelector('#currentLocation').addEventListener("click", navigator.geolocation.getCurrentPosition(searchCurrent));

//searchButton.onClick = searchCity;
//currentLocation.onClick = navigator.geolocation.getCurrentPosition(searchCurrent);

