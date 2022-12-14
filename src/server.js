const { geocode } = require("./services/geocode.js");
const { weather } = require("./services/weather.js");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
const options = {
  origin: "*",
};
const buildFolder = path.join(__dirname, "../", "build");
const indexHTML = path.join(__dirname, "build", "index.html");

app.use(cors(options));
app.use(express.static(buildFolder));
app.get("/", function (req, res) {
  res.sendFile(indexHTML);
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.json({
      error: "You must provide an address",
    });
  }
  geocode(req.query.address, (error, data) => {
    if (error) return res.send({ error });

    const { latitude, longitude } = data;

    weather(latitude, longitude, (error, weather) => {
      if (error) return res.send({ error });
      const { temperature, feelslike, description, region } = weather;
      res.send({ temperature, feelslike, description, region });
    });
  });
});

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});
