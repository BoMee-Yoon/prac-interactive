export default class Movement {
  constructor(
    $box,
    mouseCoordinate,
    moveRange = 1,
    reverse = false,
    speed = 0.05,
  ) {
    this.$box = $box;
    this.mouseCoordinate = mouseCoordinate;
    this.speed = speed;
    this.moveRange = moveRange;
    this.reverse = reverse;

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
    const reverseSign = this.reverse ? '-' : '';
    this.$box.style.transform = `translate(${reverseSign}${
      this.mx / this.moveRange
    }px, ${reverseSign}${this.my / this.moveRange}px)`;
  }
  move() {
    this.setMovingCoordinate();
    this.setTranslate();
    window.requestAnimationFrame(this.move.bind(this));
  }
}
