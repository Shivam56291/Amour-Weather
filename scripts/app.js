const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  const { cityDetails, weather } = data;

  // Update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // Update the night/day & icon images
  const iconSource = `icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSource);

  let timeSource = weather.IsDayTime ? "images/day.svg" : "images/night.svg";
  time.setAttribute("src", timeSource);

  // Remove the d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  document.body.style.backgroundImage = weather.IsDayTime
    ? "linear-gradient(to top, #a8edea, #fed6e3)"
    : "linear-gradient(to top, #0f2027, #203a43, #2c5364)";
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weather,
  };
};

cityForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //Update ui with new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.error(err));
});
