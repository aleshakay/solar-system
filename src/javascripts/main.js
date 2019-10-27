import 'bootstrap';
import '../styles/main.scss';
import grid from './components/grid/grid';
import single from './components/singleCard/singleCard';

const init = () => {
  grid.makeGrid();
  grid.searchSpaceBar();
  grid.solarEvents();
  grid.attachEnterEvent();
  single.singleCard();
  single.addClose();
};
init();
