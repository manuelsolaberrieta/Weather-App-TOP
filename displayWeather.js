//Done according to the object that openweather returns
export default function displayWeather(data) {
  const weatherMain = data.weather[0].main;
  const weatherDesc = data.weather[0].description;
  const temp = data.main.temp;
  const feelsLike = data.main.feels_like;
  const maxTemp = data.main.temp_max;
  const minTemp = data.main.temp_min;
  const windSpeed = data.wind.speed;
  const container = document.createElement("div");
  const mainParagraph = document.createElement("p");
  mainParagraph.textContent = `The weather is: ${weatherMain}, ${weatherDesc}. There is a temperature of ${temp}° with a maximum of ${maxTemp}° and a minimum of ${minTemp}°. It feels like ${feelsLike}° and the wind speed is at ${windSpeed}.`;
  container.append(mainParagraph);
  container.classList.add("resultado-final");
  return container;
}
