const apiKey = `182aa2c63a537687d37203b245b80957`;
const form = document.querySelector("form");
const searchInput = document.getElementById("search-input");
const appContainer = document.getElementById("app-container");

const getWeather = async (city) => {
    // setTimeout(() => {
    appContainer.innerHTML = `<h2 id="notFound">Loading....<h2>`
    // }, -5000)
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(api);
    const data = await response.json()
    return showWeather(data);
}

const showWeather = (data) => {
    console.log(data)
    if (data.cod === "404") {
        appContainer.innerHTML = `<h2 id="notFound"> City Not Found <h2>`
        return;
    }
    appContainer.innerHTML = `
    <div id="location">
        <p>${data.name}</p>
    </div>
    <div id="temp">
        <img id="temp-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        <p><span class="qadeer" id="temp-value">${Math.floor(data.main.temp)}</span><span class="qadeer" id="temp-unit">&#176c</span></p>
        <p id="climate">${data.weather[0].main}</p>
    </div>

    `
}


form.addEventListener("submit", (event) => {
    getWeather(searchInput.value);
    searchInput.value = " ";
    event.preventDefault();
})