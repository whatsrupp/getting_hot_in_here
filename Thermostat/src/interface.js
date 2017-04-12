console.log("interface loaded")

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateDisplays();
  getWeather();

  function updateTemperature() {
    $('#current_temperature_display').text(thermostat.temperature);
  }

  function updateUsage() {
    $('#current_usage_display').text(thermostat.currentEnergyUsage());
  }

  function updatePowerSaver() {
  $('#ps_on_display').text(thermostat.isPowerSaverOn);

  }

  function updateUsageColour(){
    $('#current_usage_display').attr('class', thermostat.currentEnergyUsage());
  }
  function updateWeather(){
    $('#weather_display').text(gettingJSON());
  }

  function updateDisplays(){
    updateTemperature();
    updatePowerSaver();
    updateUsage();
    updateUsageColour();
  }


  function getWeather(){
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=a84eb338a4d19a35c4da060294cec2fb&units=metric', function(data){
      $('#weather_display').text(data.main.temp);
    });
  }


  $("#reset_button").click(function() {
    thermostat.reset();
    updateDisplays();
  });

  $("#temp_up_button").click(function() {
    thermostat.temperatureUp();
    updateDisplays();
  });

  $("#temp_down_button").click(function() {
    thermostat.temperatureDown();
    updateDisplays();
  });

  $("#power_saver_switch").click(function() {
    thermostat.powerSaverSwitch();
    updateDisplays();

  });

});
