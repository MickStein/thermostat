class Thermostat {
  constructor() {
    this.temp = 20;
    this.minTemp = 10;
    this.maxTemp = 25
    this.energySaving = true;
  };

  currentTemp() {
    return this.temp;
  };

  minimumTemp() {
    return this.minTemp;
  };
  
  maximumTemp() {
    return this.maxTemp;
  };

  energySavingMode() {
    return this.energySaving;
  };

  up() {
    return 'increased temp';
  };
  
  down() {
    return 'decreased temp';
  };
};