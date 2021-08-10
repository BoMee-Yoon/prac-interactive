import Movement from './Movement.js';
import MouseCoordinate from './MouseCoordinate.js';
import { $ } from '../../lib/utils/util.js';

const mouseMovementFactory = ($box, eventType) => {
  new Movement($box, new MouseCoordinate(eventType));
};

const moveBox = () => {
  mouseMovementFactory($('.box1'));
};
const clickBox = () => {
  mouseMovementFactory($('.box2'), 'click');
};

const init = () => {
  moveBox();
  clickBox();
};

window.addEventListener('DOMContentLoaded', init);
