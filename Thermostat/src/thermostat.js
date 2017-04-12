function Thermostat (){
  this.temperature = 20;
  this.isPowerSaverOn = true;
  this.maxTemperature = 25;
};

Thermostat.prototype.temperatureUp = function(){
  this.temperature++;
}

Thermostat.prototype.temperatureDown = function(){
  this.temperature--;
}
