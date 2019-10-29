import $ from 'jquery';
import 'bootstrap';
import './grid.scss';
import utilities from '../../helpers/utilities';
import planets from '../data/planets';


const makeGrid = () => {
  const planet = planets.getPlanets();
  let domString = '';
  for (let i = 0; i < planet.length; i += 1) {
    domString += `
        <div class="card planetCards" id="${planet[i].name.toLowerCase()}">
          <img class="card-img-top planetImg hide" src=${planet[i].image}>
            <div class="card-body">
              <h5 class="card-title planetTitle">${planet[i].name}</h5>
              <p class="card-text d-none">Description: ${planet[i].description}</p>
              <p class="card-text d-none">Gas planet: ${planet[i].isGasPlanet}</p>
              <p class="card-text d-none">Number of Moons: ${planet[i].numberOfMoons}</p>
              <p class="card-text d-none"> Largest Moon : ${planet[i].nameOfLargestMoon}</p>
              </div>
              </div>
           </div>
          </div>
          `;
  }
  utilities.printToDom('planetsHere', domString);
};

const filterlist = () => {
  const planetList = planets.getPlanets();
  const searchedForPlanet = $('#input').val().toLowerCase();
  console.error(searchedForPlanet);
  const findPlanet = planetList.filter((x) => x.name.toLowerCase().includes(searchedForPlanet));
  console.error(findPlanet);
  const domString = `
        <div class="card planetCards singCard" id="${findPlanet[0].name.toLowerCase()}">
          <img class="card-img-top" src=${findPlanet[0].image}>
            <div class="card-body">
              <h5 class="card-title">${findPlanet[0].name}</h5>
              <p class="card-text ">Description: ${findPlanet[0].description}</p>
              <p class="card-text ">Gas planet: ${findPlanet[0].isGasPlanet}</p>
              <p class="card-text ">Number of Moons: ${findPlanet[0].numberOfMoons}</p>
              <p class="card-text "> Largest Moon : ${findPlanet[0].nameOfLargestMoon}</p>
              <p><span class="close">X</span></p>
              </div>
           </div>
          </div>
          `;
  utilities.printToDom('planetsHere', domString);
};

const addClose = () => {
  $('body').ready(() => {
    $('.close').on('click', () => {
      // $('#solarCard').addClass('hide');
      console.error('hithere');
    });
  });
};

const enterEvent = (e) => {
  const key = e.keyCode;
  if (key === 13) {
    // e.preventDefault();
    filterlist();
  }
};

const attachEnterEvent = () => {
  $('#input').on('keypress', enterEvent);
};

const searchSpaceBar = () => {
  const domString = '<input type="text" id="input" placeholder="Enter planet name..." data-search>';
  utilities.printToDom('searchHere', domString);
};

const hideForSolo = () => {
  $('#planetsHere').empty();
};

const solarEvents = () => {
  $('body').on('mouseenter', '.planetCards', (e) => {
    $(e.target).find('.planetImg').show();
    $(e.target).find('.planetTitle').hide();
  });
  $('body').on('mouseleave', '.planetCards', (e) => {
    $(e.target).find('.planetImg').hide();
    $(e.target).find('.planetTitle').show();
  });
  $('body').on('click', '.planetCards', () => {
    utilities.printToDom('planetsHere', hideForSolo);
    // utilities.printToDom('solarCard', singleCard);
  });
};

export default {
  makeGrid, solarEvents, searchSpaceBar, attachEnterEvent, addClose,
};
