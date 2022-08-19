async function getWather(city) {
    const weatherIcon = document.querySelector('.weather-icon')
    const temperature = document.querySelector('.temperature')
    const weatherDescription = document.querySelector('.weather-description')
    const wind = document.querySelector('.wind')
    const humidity = document.querySelector('.humidity')
    const weatherError = document.querySelector('.weather-error')
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=0a150ef70c52f948a15ad635e3700be9&units=metric`
    const data = await fetch(api)
    const res = await data.json()
    if(data.ok === true) {
        weatherError.textContent = ``
        wind.innerHTML = `Wind speed: ${res.wind.speed} m/s`
        humidity.textContent = `Humidity: ${res.main.humidity}%`
        weatherDescription.textContent = res.weather[0].main;
        temperature.textContent = `${Math.floor(res.main.temp)}°C`;
        weatherIcon.style.display = 'block'
        weatherIcon.classList.add(`owf-${res.weather[0].id}`);
    }
    else{
        weatherError.textContent = `City not found`
        wind.innerHTML = ``
        humidity.textContent = ``
        weatherDescription.textContent =``
        temperature.textContent = ``
        weatherIcon.style.display = 'none'
    }
    
}




export default getWather