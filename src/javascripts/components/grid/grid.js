import 'bootstrap';
import './grid.scss';
import utilities from '../../helpers/utilities';
import planets from '../data/planets';

const makeGrid = () => {
  const planet = planets.getPlanets();
  let domString = ` <h1 class="solarPageTitle">Solar System</h1>
  <div class="card-group">`;
  for (let i = 0; i < planet.length; i += 1) {
    domString += `
    <div class="card planetCards">
    <img class="card-img-top" src=${planet[i].image}>
    <div class="card-body">
      <h5 class="card-title">${planet[i].name}</h5>
      <p class="card-text">Description: ${planet[i].description}</p>
      <p class="card-text">Gas planet: ${planet[i].isGasPlanet}</p>
      <p class="card-text">Number of Moons: ${planet[i].numberOfMoons}</p>
      <p class="card-text"> Largest Moon : ${planet[i].nameOfLargestMoon}</p>
      </div>
      </div>
  </div>`;
  }
  domString += '</div>';
  utilities.printToDom('planetsHere', domString);
};


export default { makeGrid };
