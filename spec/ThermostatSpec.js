'use strict'

describe('Thermostat', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('can increase temperature', () => {
    expect(thermostat.up()).toBe(21);
  });
  
  it('can decrease temperature', () => {
    expect(thermostat.down()).toBe('decreased temp');
  });

  describe('can change power saving mode', () => {
    it('off', () => {
      expect(thermostat.powerSavingMode()).toBe(false);
    });
    
    it('back on', () => {
      thermostat.powerSavingMode(); //turns power saving mode off

      expect(thermostat.powerSavingMode()).toBe(true);
    });
  });
});