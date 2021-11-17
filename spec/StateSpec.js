'use strict'

describe('Thermostat state', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('when created', () => {
    it('should have a start temp of 20 degrees', () => {
      expect(thermostat.currentTemp()).toEqual(20);
    });

    it('should have an initial minimum temp of 10 degrees', () => {
      expect(thermostat.minimumTemp()).toEqual(10);
    });
    
    it('should have an initial maximum temp of 25 degrees', () => {
      expect(thermostat.maximumTemp()).toEqual(25);
    });

    it('should start in power saving mode', () => {
      expect(thermostat.currentMode()).toBe(true);
    });
  });

  describe('when power saving is', () => {
    it('on', () => {
      thermostat.powerSavingMode(); //turns off power saving mode

      expect(thermostat.maximumTemp()).toBe(32);
    });
  });
});