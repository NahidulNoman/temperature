const apiKey = `2087e21d402bd545d01a85092c0e6cb0`

const loadWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(rest => rest.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = (data) => {
    let temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp
    document.getElementById('condition').innerText = data.weather[0].main;
}

document.getElementById('button-search').addEventListener('click',function(){
    const search = document.getElementById('search');
    const searchValue = search.value;
    document.getElementById('city').innerText = searchValue;
   
    loadWeather(searchValue);
})



