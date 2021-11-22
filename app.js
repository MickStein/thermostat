// This top level ensures the functions within do not run until the page it loaded
document.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
  document.querySelector('#temp').innerText = thermostat.temp

  document.querySelector('#temp-up').addEventListener('click', () => {
    thermostat.up(); 
    document.querySelector('#temp').innerText = thermostat.temp;
  });
  
  document.querySelector('#temp-down').addEventListener('click', () => {
    thermostat.down();
    document.querySelector('#temp').innerText = thermostat.temp;
  });  
});

