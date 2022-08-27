const fetch = require("node-fetch");
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoib3RqdSIsImEiOiJjbDcyZThtdjkwamx5NDFuOTF2aW1oMDhuIn0.EZ1ULM7-jCIBhir_F3qkXw&limit=1`;
  fetch(url)
    .then((response) => response.json())
    .then(
      (json) => {
        if (json.features.length === 0)
          callback("Unable to find location. Try another search!");
        else {
          console.log(json);
          const geolocation = json.features[0];
          const latitude = geolocation.center[1];
          const longitude = geolocation.center[0];
          const location = geolocation.place_name;
          callback(undefined, { latitude, longitude, location });
        }
      },
      (error) => {
        callback(error);
      }
    );
};
module.exports = { geocode };
