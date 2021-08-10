export default class Movement {
  constructor($box, mouseCoordinate, speed = 0.05) {
    this.$box = $box;
    this.mouseCoordinate = mouseCoordinate;
    this.speed = speed;

    this.mx = 0;
    this.my = 0;

    this.init();
  }

  init() {
    this.move();
  }
  setMovingCoordinate() {
    const { x, y } = this.mouseCoordinate;
    this.mx += (x - this.mx) * this.speed;
    this.my += (y - this.my) * this.speed;
  }
  setTranslate() {
    this.$box.style.transform = `translate(${this.mx}px, ${this.my}px)`;
  }
  move() {
    this.setMovingCoordinate();
    this.setTranslate();
    window.requestAnimationFrame(this.move.bind(this));
  }
}
