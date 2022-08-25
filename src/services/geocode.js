const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoib3RqdSIsImEiOiJjbDcyZThtdjkwamx5NDFuOTF2aW1oMDhuIn0.EZ1ULM7-jCIBhir_F3qkXw&limit=1";
  request({ url, json: true }, (error, { body }) => {
    if (error) callback("Geocoding ERROR!");
    else if (body.features.length === 0)
      callback("Unable to find location. Try another search!");
    else {
      const geolocation = body.features[0];
      const latitude = geolocation.center[1];
      const longitude = geolocation.center[0];
      const location = geolocation.place_name;
      callback(undefined, { latitude, longitude, location });
    }
  });
};

module.exports = { geocode };
