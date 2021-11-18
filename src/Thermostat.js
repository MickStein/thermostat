class Thermostat {
  constructor() {
    this.temp = 20;
    this.minTemp = 10;
    this.maxTemp = 25;
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

  reset() {
    this.temp = 20;
  };

  currentMode() {
    return this.powerSaving;
  }

  powerSavingMode() {
    if(this.powerSaving === true) {
      this.maxTemp = 32;
      this.powerSaving = false;
    } else {
      this.maxTemp = 25;
      this.powerSaving = true;
    };

    return this.powerSaving;
  };

  up() {
    if(this.temp != this.maxTemp) {
    this.temp++;
    };
    return this.temp;
  };
  
  down() {
    if(this.temp != this.minTemp) {
      this.temp--;
    }
    return this.temp;
  };

  currentEnergyUsage() {
    if(this.temp < 18) {
      return 'low-usage';
    } else if(this.temp <= 25) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    };
  };
};