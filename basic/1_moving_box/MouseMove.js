export default class MouseMove {
  constructor() {
    this._x = 0;
    this._y = 0;
    this.init();
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  init() {
    this.setEvent();
  }

  setEvent() {
    window.addEventListener('mousemove', this.setCoordinate.bind(this), false);
  }

  setCoordinate({ clientX, clientY }) {
    this._x = clientX;
    this._y = clientY;
  }
}
