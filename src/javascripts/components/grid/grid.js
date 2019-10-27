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
          <img class="card-img-top hide" src=${planet[i].image}>
            <div class="card-body">
              <h5 class="card-title">${planet[i].name}</h5>
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

const enterEvent = (e) => {
  const key = e.keyCode;
  if (key === 13) {
    e.preventDefault();
    addMessage();
    $('#clearButton').attr('disabled', false);
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
    $(e.target).find('.card-img-top').show();
    $(e.target).find('.card-title').hide();
  });
  $('body').on('mouseleave', '.planetCards', (e) => {
    $(e.target).find('.card-img-top').hide();
    $(e.target).find('.card-title').show();
  });
  $('body').on('click', '.planetCards', () => {
    utilities.printToDom('planetsHere', hideForSolo);
    // utilities.printToDom('solarCard', singleCard);
  });
};

export default { makeGrid, solarEvents, searchSpaceBar };
