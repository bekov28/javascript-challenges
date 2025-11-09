//variables
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather = document.querySelector(".weather-icon");
const errorSpan = document.querySelector(".error");

//request weather data function
async function requestWeatherData(city) {
  const response = await fetch(API_URL + `q=${city}` + "&units=metric" + `&appid=${API_KEY}`);

  if (response.status == 404) {
    errorSpan.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
      weather.src = "images/clouds.png";
    } else if (data.weather[0].main === "Mist") {
      weather.src = "images/mist.png";
    } else if (data.weather[0].main === "Clear") {
      weather.src = "images/clear.png";
    } else if (data.weather[0].main === "Drizzle") {
      weather.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Rain") {
      weather.src = "images/rain.png";
    }

    document.querySelector(".weather").style.display = "block";
    errorSpan.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  requestWeatherData(searchInput.value);
});
