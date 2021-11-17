'use strict'

describe('Thermostat', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('can increase temperature', () => {
    expect(thermostat.up()).toBe('increased temp')
  });
  
  it('can decrease temperature', () => {
    expect(thermostat.down()).toBe('decreased temp')
  });
});