// This top level ensures the functions within do not run until the page it loaded
document.addEventListener("DOMContentLoaded", () => {
  const updateTemp = () => {
    document.querySelector('#temp').innerText = thermostat.temp;
    // below takes text in temp id and adds a class name depending on what is returned from 
    // thermostat.js logic file. This means it will be either low-usage, medium-usage or
    // high-usage, which is then added to the html as a class so the CSS reads this and
    // changes the text colour accordingly.
    document.querySelector('#temp').className = thermostat.currentEnergyUsage();
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

  // The below takes the current city id from the html and uses change to update the
  // city const that is then interpolated into the url const. 
  // This url is then used to return data for the selected city.
  // interface.js
  document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      });
  });
});
