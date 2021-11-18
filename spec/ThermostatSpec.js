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
    it('go below min temp', () => {
      for (let i = 0; i < 11; i++) {
        thermostat.down();
      }; //For loop to make temp under 10 degrees
        
      expect(thermostat.currentTemp()).toBe(10);
    });
      
    describe('go above max temp when power saving is', () => {
      it('on', () => {
        for (let i = 0; i < 6; i++) {
          thermostat.up();
        }; //For loop to make temp over 25 degrees
          
        expect(thermostat.currentTemp()).toBe(25);
      });
      
      it('off', () => {
        thermostat.powerSavingMode();
        for (let i = 0; i < 13; i++) {
          thermostat.up();
        }; //For loop to make temp over 32 degrees
          
        expect(thermostat.currentTemp()).toBe(32);
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

  describe('can ask for the current energy usage', () => {
    it('returns low-usage if <18', () => {
      for (let i = 0; i < 3; i++) {
        thermostat.down();
      }; //For loop to make temp under 18 degrees

      expect(thermostat.currentEnergyUsage()).toBe('low-usage');
    });

    it('returns medium-usage if <=25', () => {
      expect(thermostat.currentEnergyUsage()).toBe('medium-usage');
    });
    
    it('returns high-usage if >25', () => {
      thermostat.powerSavingMode();
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }; //For loop to make temp over 25 degrees

      expect(thermostat.currentEnergyUsage()).toBe('high-usage');
    });
  });
});