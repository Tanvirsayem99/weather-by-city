let apiKey = `ae5bdf1e4885a900ee5da87bb71774ea`;
const loadData = (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then(res => res.json()).then(data => displayData(data));
}

const search = ()=>{
    const valueOfSearch = document.getElementById('search-bar').value;
    loadData(valueOfSearch);
}

const displayData = data =>{
    console.log(data);
    document.getElementById('country').innerText = data.name;;
    document.getElementById('temp').innerText = data.main.temp;;
    document.getElementById('weather').innerText = data.weather[0].main;;

}



