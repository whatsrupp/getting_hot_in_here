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
    return 'low-usage';
  } else if (this.temperature < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
}

Thermostat.prototype.powerSaverSwitch = function() {
  this.isPowerSaverOn = !this.isPowerSaverOn;
  this.currentMaxTemperature = (this.isPowerSaverOn ? MAX_TEMP_POWERSAVER_ON : MAX_TEMP_POWERSAVER_OFF);
}

$(document).ready(function() {
$(".panorama").panorama_viewer({
    repeat: false,              // The image will repeat when the user scroll reach the bounding box. The default value is false.
    direction: "horizontal",    // Let you define the direction of the scroll. Acceptable values are "horizontal" and "vertical". The default value is horizontal
    animationTime: 700,         // This allows you to set the easing time when the image is being dragged. Set this to 0 to make it instant. The default value is 700.
    easing: "ease-out",         // You can define the easing options here. This option accepts CSS easing options. Available options are "ease", "linear", "ease-in", "ease-out", "ease-in-out", and "cubic-bezier(...))". The default value is "ease-out".
    overlay: true               // Toggle this to false to hide the initial instruction overlay
  });
});
