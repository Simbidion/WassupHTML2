var lastUpdated = document.getElementById("last-update");
var windStrength = document.getElementById("wind-strength");
var windDirection = document.getElementById("wind-direction");
var compassArrow = document.getElementById("compass-arrow");

const updateWeatherData = (weatherObj) => {
  console.log(weatherObj);
  lastUpdated.innerHTML = "Last update: " + weatherObj.lastUpdate;
  windStrength.innerHTML = weatherObj.strength + " KTS";
  windDirection.innerHTML = weatherObj.direction;
  compassArrow.className = compassArrow.className + " " + weatherObj.direction.toLowerCase();
}

const parseWeatherData = (data) => {
  const weather = {
    direction: data.split('\n')[0],
    strength: data.split('\n')[1],
    lastUpdate: data.split('\n')[2],
  };
  return weather;
}

$.get("../weatherdata.txt", function(data, status){
  const weather = parseWeatherData(data);
  updateWeatherData(weather);
}, 'text');
