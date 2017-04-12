'use strict';
describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('properties of thermostat', function(){

    it('initializes with a temperature of 20', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('initializes in powersaving mode', function(){
      expect(thermostat.isPowerSaverOn).toEqual(true);
    });

    it('initalizes with a current max temperature of 25', function(){
      expect(thermostat.currentMaxTemperature).toEqual(25);
    });

    it('initialises with a minimum temperature of 10', function() {
      expect(thermostat.minTemperature).toEqual(10);
    });

  });

  describe('Context: User wants to change temperature', function(){

    describe('#temperatureUp', function(){

      it('increases temperature when user calls temperature up', function(){
        var startingTemp = thermostat.temperature;
        thermostat.temperatureUp();
        var endingTemp = thermostat.temperature;
        expect(endingTemp-startingTemp).toEqual(1);
      });

      it('increases temperature by specified increment', function(){
        var startingTemp = thermostat.temperature;
        thermostat.temperatureUp(3);
        var endingTemp = thermostat.temperature;
        expect(endingTemp-startingTemp).toEqual(3);
      });
    });

    describe('#temperatureDown', function(){

      it('decreases the temperature when user calls temperatureDown', function(){
        var startingTemp = thermostat.temperature;
        thermostat.temperatureDown();
        var endingTemp = thermostat.temperature;
        expect(startingTemp-endingTemp).toEqual(1);
      });
      it('decreases the temperature by specified decrement', function(){
        var startingTemp = thermostat.temperature;
        thermostat.temperatureDown(5);
        var endingTemp = thermostat.temperature;
        expect(startingTemp-endingTemp).toEqual(5);
      });
    });

  });

  describe('#reset', function(){

    it('resets the temperature to default temperature when called', function(){
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('#currentEnergyUsage', function() {
    it('should return low for temperature under 18', function() {
      thermostat.temperatureDown(4);
      expect(thermostat.currentEnergyUsage()).toEqual('Low usage');
    });
    it('should return medium for temperature between 18 and 25', function() {
      expect(thermostat.currentEnergyUsage()).toEqual('Medium usage');
    });
    it('should return high for temperature over 25', function() {
      thermostat.temperatureUp(6);
      expect(thermostat.currentEnergyUsage()).toEqual('High usage');
    });
  });

  describe('#powerSaverSwitch', function() {
    it('changes the state of the power saving mode', function() {
      thermostat.powerSaverSwitch();
      expect(thermostat.isPowerSaverOn).toEqual(false);
    });
    it('changes the maximum temperature after turning PS off', function() {
      thermostat.powerSaverSwitch();
      expect(thermostat.currentMaxTemperature).toEqual(MAX_TEMP_POWERSAVER_OFF);
    });
  });

});
