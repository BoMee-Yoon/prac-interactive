export default class Movement {
  constructor($box, mousemove, speed = 0.05) {
    this.$box = $box;
    this.mousemove = mousemove;
    this.speed = speed;

    this.mx = 0;
    this.my = 0;

    this.init();
  }

  init() {
    this.move();
  }
  setMovingCoordinate() {
    this.mx += (this.mousemove.x - this.mx) * this.speed;
    this.my += (this.mousemove.y - this.my) * this.speed;
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
