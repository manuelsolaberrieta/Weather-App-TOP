export default class Result {
  constructor(data) {
    return this.createResult(data);
  }
  createResult(data) {
    const li = document.createElement("li");
    const city = document.createElement("h3");
    const state = document.createElement("h4");
    const country = document.createElement("h5");
    const coords = document.createElement("div");
    const lat = document.createElement("span");
    const lon = document.createElement("span");
    lat.textContent = data.lat;
    lon.textContent = data.lon;
    coords.append(lat, lon);
    city.textContent = data.name;
    state.textContent = data.state;
    country.textContent = data.country;
    li.append(city, state, country, coords);
    li.classList.add("locResult");
    return li;
  }
}
