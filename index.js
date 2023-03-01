import Result from "./Result.js";
import displayWeather from "./displayWeather.js";

const appid = "20f406d2d8ad16eda081e009c67e5b84";
const processBtn = document.querySelector("#process");
const locationInput = document.querySelector("#location");
const resultados = document.querySelector(".resultados");
const resultado = document.querySelector(".resultado");

function showResults(arr) {
  const list = document.createElement("ul");
  resultados.replaceChildren();
  resultado.replaceChildren();
  arr.forEach((element) => {
    const res = new Result(element);
    res.addEventListener("click", (e) => {
      getWeatherData(e.currentTarget);
    });
    list.append(res);
  });
  resultados.append(list);
}

async function getApiLocations(location) {
  const data = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${appid}`
  );
  let results = await data.json();
  showResults(results);
}

async function getWeatherData(result) {
  resultados.replaceChildren();
  let lat = result.lastElementChild.firstElementChild.textContent;
  let lon = result.lastElementChild.lastElementChild.textContent;
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`
  );
  let weather = await data.json();
  const html = displayWeather(weather);
  resultado.append(html);
}

processBtn.addEventListener("click", () => {
  getApiLocations(locationInput.value);
});
