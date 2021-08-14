import { $ } from '../../lib/utils/util.js';
import { mousemoveFactory } from '../mousemove/index.js';

const moveBox = () => {
  mousemoveFactory($('.box1'));
};
const clickBox = () => {
  mousemoveFactory($('.box2'), 'click');
};

const init = () => {
  moveBox();
  clickBox();
};

// window.addEventListener('DOMContentLoaded', init);
