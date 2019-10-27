import $ from 'jquery';
import planet from '../data/planets';
import utilities from '../../helpers/utilities';

import './singleCard.scss';

const singleCardMaker = (e) => {
  const singlePlanet = planet.getPlanet(e.target.closest('.planetCards').id)[0];
  const domString = `
  <div class="d-flex">
    <div class="card soloPlanetCards">
      <img class="card-img-top" src=${singlePlanet.image}>
        <div class="card-body">
          <h5 class="card-title">${singlePlanet.name}</h5>
          <p class="card-text">Description: ${singlePlanet.description}</p>
          <p class="card-text">Gas planet: ${singlePlanet.isGasPlanet}</p>
          <p class="card-text">Number of Moons: ${singlePlanet.numberOfMoons}</p>
          <p class="card-text"> Largest Moon : ${singlePlanet.nameOfLargestMoon}</p>
          <p><span class="closeme">X</span></p>
        </div>
      </div>
    </div>
    `;
  utilities.printToDom('solarCard', domString);
};

const addClose = () => {
  $('body').ready(() => {
    $('.closeme').on('click', () => {
      // $('#solarCard').addClass('hide');
      console.error('hithere');
    });
  });
};

const singleCard = () => {
  $(document).on('click', '.planetCards', singleCardMaker);
};

export default { singleCard, addClose };
