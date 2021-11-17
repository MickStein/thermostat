class Thermostat {
  constructor() {
    this.temp = 20;
    this.minTemp = 10;
  };

  currentTemp() {
    return this.temp;
  };

  minimumTemp() {
    return this.minTemp;
  };

  up() {
    return 'increased temp';
  };
  
  down() {
    return 'decreased temp';
  };
};