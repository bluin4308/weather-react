const fetch = require("node-fetch");
const weather = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=190559d6c071c1cbe6ffcf68868a3328&query=' + latitude +',' + longitude +'&units=m';
  fetch(url).then(response => response.json()).then((json) => {
    if(json.error)
      callback("Weather ERROR!");
    else{
      const weather = json.current;
      callback(undefined, {temperature: weather.temperature,
        description: weather.weather_descriptions[0], feelslike: weather.feelslike, region: json.location.region})
    }
  }, (error) => {
    callback(error);
  })
}
module.exports = {weather};