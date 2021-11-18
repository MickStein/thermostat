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
      thermostat.down(); //This would be 9 degrees
        
      expect(thermostat.currentTemp()).toBe(10);
    });
      
    describe('go above max temp when power saving is', () => {
      it('on', () => {
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up(); //This would be 26 degrees
          
        expect(thermostat.currentTemp()).toBe(25);
      });
      
      it('off', () => {
        thermostat.powerSavingMode();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up(); //Would be 33 degrees
          
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
      thermostat.down();
      thermostat.down();
      thermostat.down(); //Is 17 degrees

      expect(thermostat.currentEnergyUsage()).toBe('low-usage');
    });

    it('returns medium-usage if <=25', () => {
      expect(thermostat.currentEnergyUsage()).toBe('medium-usage');
    });
    
    it('returns high-usage if >25', () => {
      thermostat.powerSavingMode();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up(); //Is 26 degrees

      expect(thermostat.currentEnergyUsage()).toBe('high-usage');
    });
  });
});