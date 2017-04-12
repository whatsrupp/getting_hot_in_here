const DEFAULT_TEMPERATURE = 20;
const MAX_TEMP_POWERSAVER_ON = 25;
const MAX_TEMP_POWERSAVER_OFF = 32;
const MIN_TEMP = 10;

function Thermostat (){
  this.temperature = DEFAULT_TEMPERATURE;
  this.isPowerSaverOn = true;
  this.currentMaxTemperature = MAX_TEMP_POWERSAVER_ON;
  this.minTemperature = MIN_TEMP;
};

Thermostat.prototype.temperatureUp = function(increment = 1){
  this.temperature += increment;
}

Thermostat.prototype.temperatureDown = function(decrement = 1){
  this.temperature -= decrement;
}

Thermostat.prototype.reset = function(){
  this.temperature = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.temperature < 18) {
    return 'Low usage';
  } else if (this.temperature < 25) {
    return 'Medium usage';
  } else {
    return 'High usage';
  }
}

Thermostat.prototype.powerSaverSwitch = function() {
  this.isPowerSaverOn = !this.isPowerSaverOn;
  this.currentMaxTemperature = (this.isPowerSaverOn ? MAX_TEMP_POWERSAVER_ON : MAX_TEMP_POWERSAVER_OFF);
}
