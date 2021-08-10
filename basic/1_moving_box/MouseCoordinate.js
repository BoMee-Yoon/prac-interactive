export default class MouseCoordinate {
  constructor(eventType = 'mousemove') {
    this._x = 0;
    this._y = 0;
    this.init(eventType);
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  init(eventType) {
    this.setEvent(eventType);
  }

  setEvent(eventType) {
    window.addEventListener(eventType, this.setCoordinate.bind(this), false);
  }

  setCoordinate({ clientX, clientY }) {
    this._x = clientX;
    this._y = clientY;
  }
}
