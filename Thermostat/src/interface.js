console.log("interface loaded")

$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#current_temperature_display').text(thermostat.temperature);
  }

  function updateUsage() {
    $('#current_usage_display').text(thermostat.currentEnergyUsage());
  }

  $('#current_temperature_display').text(thermostat.temperature);

  $('#current_usage_display').text(thermostat.currentEnergyUsage());

  $('#ps_on_display').text(thermostat.isPowerSaverOn);

  $("#reset_button").click(function() {
    thermostat.reset();
    updateTemperature();
    updateUsage();
  });

  $("#temp_up_button").click(function() {
    thermostat.temperatureUp();
    updateTemperature();
    updateUsage();
  });

  $("#temp_down_button").click(function() {
    thermostat.temperatureDown();
    updateTemperature();
    updateUsage();
  });

  $("#power_saver_switch").click(function() {
    thermostat.powerSaverSwitch();
  });

});
