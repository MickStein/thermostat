'use strict'

describe('Thermostat state', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('should have a start temp of 20 degrees', () => {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('should have a minimum temp of 10 degrees', () => {
    expect(thermostat.minimumTemp()).toEqual(10);
  });
  
  it('should have a maximum temp of 32 degrees', () => {
    expect(thermostat.maximumTemp()).toEqual(25);
  });

  it('should start in power saving mode', () => {
    expect(thermostat.energySavingMode()).toBe(true);
  });
});