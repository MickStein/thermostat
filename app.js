// This top level ensures the functions within do not run until the page it loaded
document.addEventListener("DOMContentLoaded", () => {
  const updateTemp = () => {
    document.querySelector('#temp').innerText = thermostat.temp;
    if (thermostat.currentEnergyUsage() === 'low-usage') {
      document.querySelector('#temp').style.color = 'green';
    } else if (thermostat.currentEnergyUsage() === 'medium-usage') {
      document.querySelector('#temp').style.color = 'black';
    } else {
      document.querySelector('#temp').style.color = 'red';
    };
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
