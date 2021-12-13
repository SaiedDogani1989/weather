class UI{
    constructor(){
        this.location = document.getElementById("w-location");
        this.main = document.getElementById("w-main");
        this.icon = document.getElementById("w-icon");
        this.temp = document.getElementById("w-temp");
        this.temp_min = document.getElementById("w-temp_min");
        this.temp_max = document.getElementById("w-temp_max");
        this.pressure = document.getElementById("w-pressure");
        this.humidity = document.getElementById("w-humidity");
        this.wind_speed = document.getElementById("w-wind_speed");
        this.lon = document.getElementById("w-lon");
        this.lat = document.getElementById("w-lat");
    }

    paint(weather , location){
        this.location.textContent = location;
        this.main.textContent = this.mainWeather(weather.weather[0].main);
        this.icon.setAttribute('src' , `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.temp.textContent = Math.floor(weather.main.temp);
        this.temp_min.textContent = Math.floor(weather.main.temp_min);
        this.temp_max.textContent = Math.floor(weather.main.temp_max);
        this.pressure.textContent = weather.main.pressure;
        this.humidity.textContent = weather.main.humidity;
        this.wind_speed.textContent = weather.wind.speed;
        this.lon.textContent = weather.coord.lon;
        this.lat.textContent = weather.coord.lat;
    }


    mainWeather(mainWeather) {
        switch (mainWeather) {
          case "Thunderstorm":
            return "Thunderstorm";
            break;
          case "Drizzle":
            return "Drizzle";
            break;
          case "Rain":
            return "Rainy";
            break;
          case "Snow":
            return "Snowy";
            break;
          case "Mist":
            return "Misty";
            break;
          case "Smoke":
            return "Smokey";
            break;
          case "Haze":
            return "Hazed";
            break;
          case "Dust":
            return "Dusty";
            break;
          case "Fog":
            return "Fogy";
            break;
          case "Sand":
            return "Sand";
            break;
          case "Ash":
            return "Ash";
            break;
          case "Squall":
            return "Squall";
            break;
          case "Tornado":
            return "Tornado";
            break;
          case "Clear":
            return "Clear";
            break;
          case "Clouds":
            return "Cloudy";
            break;
          default:
            return mainWeather;
        }
    }
}