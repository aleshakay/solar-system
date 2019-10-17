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
        <div class="card planetCards">
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

// const hide = () => {
//   $('.card-img-top').hide();
//   $('.card-text').hide();
// };

// const hoverFun = () => {
//   $('.planetCards').mouseover((e) => {
//     const card = $(e.target);
//     card.find('.card-img-top').show();
//     card.find('.card-title').hide();
//   });
//   $('.planetCards').mouseleave((e) => {
//     const card = $(e.target);
//     card.find('.card-img-top').hide();
//     card.find('.card-title').show();
//   });
// };

// const clickCard = () => {
//   $('.planetCards').click((e) => {
//     const card = $(e.target);
//     card.find('.card-title').not(this).hide();
//   });
// };

const solarEvents = () => {
  $('body').on('mouseenter', '.planetCards', (e) => {
    $(e.target).find('.card-img-top').removeClass('hide');
    $(e.target).find('.card-title').addClass('hide');
  });
  $('body').on('mouseleave', '.planetCards', (e) => {
    $(e.target).find('.card-img-top').addClass('hide');
    $(e.target).find('.card-title').addClass('show');
    console.log(e.target);
  });
  $('body').on('click', '.planetCards', () => {
    utilities.printToDom('planetsHere', '');
    utilities.printToDom('solarCard', 'this is a single item.  maybe we should call another component?');
  });
};

export default { makeGrid, solarEvents };
