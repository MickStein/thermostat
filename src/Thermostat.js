class Thermostat {
  constructor() {
    this.temp = 20;
  };

  currentTemp() {
    return this.temp;
  };

  up() {
    return 'increased temp';
  };
  
  down() {
    return 'decreased temp';
  };
};