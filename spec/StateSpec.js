'use strict'

describe('Thermostat state', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('should have a start temp of 20 degrees', () => {
    expect(thermostat.currentTemp()).toEqual(20)
  });
});