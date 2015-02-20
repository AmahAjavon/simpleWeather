'use strict';

$(document).ready(init);
console.log(Weather);
var weatherApi;
function init() {
  weatherApi = Weather();
  getLocation();
  $('#get-zip').click(getZip);
}

function getZip() {
  var zipcode = $('.zip').val();
  getWeatherAndDisplay({zipCode: zipcode});
}


function getLocation() {
  var getLocal = {enableHighAccuracy: true, timeout: 5000, maximumAge: 0};
  navigator.geolocation.getCurrentPosition(getWeatherAndDisplay, error, getLocal);
}

var weather = {};


function getWeatherAndDisplay(query) {
  var successCallback = function(response){
  console.log(response);
    if(response.response.error){
      alert(response.response.error.description);
      return ;
    }
    weather[this.field] = response;
    displayForecast();
  };
  weatherApi.requestConditions(query, successCallback.bind({field: 'current'}));

  weatherApi.requestYesterday(query, successCallback.bind({field: 'yesterday'}));

  weatherApi.requestForecast(query, successCallback.bind({field: 'forecast'}));

}


function error(err) {
  console.log('Could not compute.', err);
}

function displayForecast() {
  if (Object.keys(weather).length === 3) {



    $('#city').text(weather.current.current_observation.display_location.city + ', ' + weather.current.current_observation.display_location.state);
    // $('#state').text(weather.forecast.forecast.simpleforecast.forecastday[0].date.weekday_short + ', ' + weather.forecast.forecast.simpleforecast.forecastday[0].date.day + ' ' + weather.forecast.forecast.simpleforecast.forecastday[0].date.monthname);
    $('#cond').text(weather.forecast.forecast.simpleforecast.forecastday[0].conditions);
    $('#temp').html(weather.current.current_observation.temp_f + '&deg;' + ' F');
    $('#icon').html('<img src ="' + weather.current.current_observation.icon_url + '">');

    $('#date0').text(weather.yesterday.history.date.mon + '/' + weather.yesterday.history.date.mday);
    // $('#date0').text(weather.forecast.forecast.simpleforecast.forecastday[0].date.yday.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[1].date.day);
    $('#icon0').html('<img src ="' + weather.current.current_observation.icon_url + '">');
    $('#hi0').text(weather.yesterday.history.dailysummary[0].maxtempi + '°');
    $('#lo0').text(weather.yesterday.history.dailysummary[0].mintempi + '°');


    $('#day1').text(weather.forecast.forecast.simpleforecast.forecastday[1].date.weekday_short);
    $('#date1').text(weather.forecast.forecast.simpleforecast.forecastday[1].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[1].date.day);
    $('#icon1').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[1].icon_url + '">');
    $('#hi1').html(weather.forecast.forecast.simpleforecast.forecastday[1].high.fahrenheit + '&deg;');
    $('#lo1').html(weather.forecast.forecast.simpleforecast.forecastday[1].low.fahrenheit + '&deg;');

    $('#day2').text(weather.forecast.forecast.simpleforecast.forecastday[2].date.weekday_short);
    $('#date2').text(weather.forecast.forecast.simpleforecast.forecastday[2].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[2].date.day);
    $('#icon2').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[2].icon_url + '">');
    $('#hi2').html(weather.forecast.forecast.simpleforecast.forecastday[2].high.fahrenheit + '&deg;');
    $('#lo2').html(weather.forecast.forecast.simpleforecast.forecastday[2].low.fahrenheit + '&deg;');

    $('#day3').text(weather.forecast.forecast.simpleforecast.forecastday[3].date.weekday_short);
    $('#date3').text(weather.forecast.forecast.simpleforecast.forecastday[3].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[3].date.day);
    $('#icon3').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[3].icon_url + '">');
    $('#hi3').html(weather.forecast.forecast.simpleforecast.forecastday[3].high.fahrenheit + '&deg;');
    $('#lo3').html(weather.forecast.forecast.simpleforecast.forecastday[3].low.fahrenheit + '&deg;');

    $('#day4').text(weather.forecast.forecast.simpleforecast.forecastday[4].date.weekday_short);
    $('#date4').text(weather.forecast.forecast.simpleforecast.forecastday[4].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[4].date.day);
    $('#icon4').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[4].icon_url + '">');
    $('#hi4').html(weather.forecast.forecast.simpleforecast.forecastday[4].high.fahrenheit + '&deg;');
    $('#lo4').html(weather.forecast.forecast.simpleforecast.forecastday[4].low.fahrenheit + '&deg;');

    $('#day5').text(weather.forecast.forecast.simpleforecast.forecastday[5].date.weekday_short);
    $('#date5').text(weather.forecast.forecast.simpleforecast.forecastday[5].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[5].date.day);
    $('#icon5').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[5].icon_url + '">');
    $('#hi5').html(weather.forecast.forecast.simpleforecast.forecastday[5].high.fahrenheit + '&deg;');
    $('#lo5').html(weather.forecast.forecast.simpleforecast.forecastday[5].low.fahrenheit + '&deg;');

    $('#day6').text(weather.forecast.forecast.simpleforecast.forecastday[6].date.weekday_short);
    $('#date6').text(weather.forecast.forecast.simpleforecast.forecastday[6].date.month + '/' + weather.forecast.forecast.simpleforecast.forecastday[6].date.day);
    $('#icon6').html('<img src = "' + weather.forecast.forecast.simpleforecast.forecastday[6].icon_url + '">');
    $('#hi6').html(weather.forecast.forecast.simpleforecast.forecastday[6].high.fahrenheit + '&deg;');
    $('#lo6').html(weather.forecast.forecast.simpleforecast.forecastday[6].low.fahrenheit + '&deg;');
  }
}
