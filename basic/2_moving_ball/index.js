import { $, changeBackgroundColor } from '../../lib/utils/util.js';
import { mousemoveFactory } from '../mousemove/index.js';

const moveBall = () => {
  mousemoveFactory($('.ball'), 'mousemove', 6, false, 0.009);
};

const init = () => {
  moveBall();
  const $bg = $('#bg');
  $bg.addEventListener('click', () => changeBackgroundColor($bg));
};

window.addEventListener('DOMContentLoaded', init);
