const storage = new Storage();

const weatherLocation =  storage.getLocationData();

const weather = new Weather(weatherLocation.city);

const ui = new UI();

document.addEventListener('DOMContentLoaded',getWeather);

document.getElementById('w-change-btn').addEventListener('click' , changeLocation);

function changeLocation(){
    const city = document.getElementById('city').value;

    weather.changeLocation(city);

    storage.setLocationData(city);

    getWeather();

    $('#locationModal').modal('hide');
}

function getWeather(){
    weather.getWeather()
                .then( result => {
                    console.log(result);
                    ui.paint(result , weather.location);
                } )
                .catch( err => console.log(err.message) );
}