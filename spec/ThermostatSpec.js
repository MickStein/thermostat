'use strict'

describe('Thermostat', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('it can', () => {
    it('increase temperature', () => {
      expect(thermostat.up()).toBe(21);
    });
    
    it('decrease temperature', () => {
      expect(thermostat.down()).toBe(19);
    });

    it('reset to 20 degrees', () => {
      thermostat.up(); //Turn temp up to 21
      thermostat.reset(); //Should reset temp back to 20

      expect(thermostat.currentTemp()).toBe(20);
    });
  });

  describe('it cannot', () => {
    describe('go below min temp when power saving', () => {
      it('is on', () => {
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();

        expect(thermostat.currentTemp()).toBe(10);
      });
    });
  });

  describe('can change power saving mode', () => {
    it('off', () => {
      expect(thermostat.powerSavingMode()).toBe(false);
    });
    
    it('on again', () => {
      thermostat.powerSavingMode(); //turns power saving mode off

      expect(thermostat.powerSavingMode()).toBe(true);
    });
  });
});