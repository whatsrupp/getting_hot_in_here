console.log("Thermostat Spec Required")
describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('properties of thermostat', function(){
    it('initializes with a temperature of 20', function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

});
