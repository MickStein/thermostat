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
});