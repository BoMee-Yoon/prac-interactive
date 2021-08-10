import Movement from './Movement.js';
import MouseMove from './MouseMove.js';

const init = () => {
  const $box = document.querySelector('.moving_box');
  new Movement($box, new MouseMove());
};

window.addEventListener('DOMContentLoaded', init);
