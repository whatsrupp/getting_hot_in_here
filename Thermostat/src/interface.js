console.log("interface loaded")

$(document).ready(function() {
  var thermostat = new Thermostat();

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

  function updateDisplays(){
    updateTemperature();
    updatePowerSaver();
    updateUsage();
    updateUsageColour();
  }

  updateDisplays();

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
