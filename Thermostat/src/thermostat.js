const DEFAULT_TEMPERATURE = 20;
const MAX_TEMP_POWERSAVER_ON = 25;
const MAX_TEMP_POWERSAVER_OFF = 32;

function Thermostat (){
  this.temperature = DEFAULT_TEMPERATURE;
  this.isPowerSaverOn = true;
  this.maxTemperature = MAX_TEMP_POWERSAVER_ON;
};

Thermostat.prototype.temperatureUp = function(){
  this.temperature++;
}

Thermostat.prototype.temperatureDown = function(){
  this.temperature--;
}

Thermostat.prototype.reset = function(){
  this.temperature = DEFAULT_TEMPERATURE;
}
