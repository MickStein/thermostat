'use strict'

describe('Thermostat', () => {
  it('can increase temperature', () => {
    let thermostat = new Thermostat();

    expect(thermostat.up()).toBe('increased temp')
  });
});