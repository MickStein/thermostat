// This top level ensures the functions within do not run until the page it loaded
document.addEventListener("DOMContentLoaded", () => {
  const updateTemp = () => {
    document.querySelector('#temp').innerText = thermostat.temp;
  };
  const thermostat = new Thermostat();
  updateTemp();

  document.querySelector('#temp-up').addEventListener('click', () => {
    thermostat.up(); 
    updateTemp();
  });
  
  document.querySelector('#temp-down').addEventListener('click', () => {
    thermostat.down();
    updateTemp();
  });

  document.querySelector('#temp-reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemp();
  });

  document.querySelector('#powersaving').addEventListener('click', () => {
    thermostat.powerSavingMode();
    updateTemp();
  });
});
