import 'bootstrap';
import '../styles/main.scss';
import grid from './components/grid/grid';

const init = () => {
  grid.makeGrid();
  grid.hide();
  grid.hoverFun();
};
init();
