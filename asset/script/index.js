// https://api.openweathermap.org/data/2.5/weather?units=metric&q=pune&appid=53ae74e992cf5d115dadab5170a3db90

const apiKey = "53ae74e992cf5d115dadab5170a3db90";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function weather(cityName) {
  const response = await fetch(apiUrl + `&q=${cityName}&appid=${apiKey}`);
  var data = await response.json();

  // console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
  document.querySelector("#wind_speed").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".temp_img").src = "asset/images/" + data.weather[0].main + ".png";
}