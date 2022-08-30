const cityInput = document.querySelector(".city");
const iconImg = document.querySelector(".icon");
const descriptionField = document.querySelector(".description");
const temperatureInfo = document.querySelector(".temp");
const humidityInfo = document.querySelector(".humidity");
const windInfo = document.querySelector(".wind");
const weatherInfo = document.querySelector(".weather");
const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search button");

let weather = {
  apiKey: "d5040defbec7459f1086b7b6918babf4",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    cityInput.innerHTML = "Weather in " + name;
    iconImg.src = "https://openweathermap.org/img/wn/" + icon + ".png";
    descriptionField.innerHTML = description;
    temperatureInfo.innerHTML = temp + "°C";
    humidityInfo.innerHTML = "Humidity: " + humidity + "%";
    windInfo.innerHTML = "Wind speed: " + speed + " km/h";
    weatherInfo.classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(searchBar.value);
  },
};

searchButton.addEventListener("click", function () {
  weather.search();
});

searchBar.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Denver");
