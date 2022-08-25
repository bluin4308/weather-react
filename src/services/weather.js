const request = require("request");
const weather = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=190559d6c071c1cbe6ffcf68868a3328&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error) callback("Weather ERROR!");
    else if (body.error)
      callback("Unable to find location. Try another search!");
    else {
      const weather = body.current;
      callback(undefined, {
        temperature: weather.temperature,
        description: weather.weather_descriptions[0],
        feelslike: weather.feelslike,
        region: body.location.region,
      });
    }
  });
};
module.exports = {weather};
