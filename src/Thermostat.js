class Thermostat {
  constructor() {
    this.temp = 20;
    this.minTemp = 10;
    this.maxTemp = 25
    this.powerSaving = true;
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

  currentMode() {
    return this.powerSaving;
  }

  powerSavingMode() {
    if(this.powerSaving === true) {
      this.powerSaving = false;
    } else {
      this.powerSaving = true;
    };

    return this.powerSaving
  };

  up() {
    return 'increased temp';
  };
  
  down() {
    return 'decreased temp';
  };
};