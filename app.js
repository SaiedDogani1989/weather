const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const { parse } = require("path");
const { url } = require("inspector");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/weather.html")
});

app.post("/", function (req, res) {

    const query = req.body.cityName;
    const unit = "metric"
    const apiId = "f53fd28099451174b20d131546312f08"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&APPID=" + apiId

    https.get(url, function (response) {
        console.log(response.statusCode)

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The temp is " + Math.round(temp + 1) +" c" + "</h1>")
            res.write("<p>The description is " + weatherDescription + "</p>");
            res.write("<img src=" + imageUrl + " />");
            res.send()
        });

    });
})






app.listen(3000, function () {
    console.log("app is running at port 3000");
});