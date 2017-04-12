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
      expect(thermostat.maxTemperature).toEqual(25);
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
    });

    describe('#temperatureDown', function(){

      it('decreases the temperature when user calls temperatureDown', function(){
        var startingTemp = thermostat.temperature;
        thermostat.temperatureDown();
        var endingTemp = thermostat.temperature;
        expect(startingTemp-endingTemp).toEqual(1);
      });
    });

  });

  describe('#reset', function(){

    it('resets the temperature to default temperature when called', function(){
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

});
