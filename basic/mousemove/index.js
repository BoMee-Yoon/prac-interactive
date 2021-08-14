import MouseCoordinate from './MouseCoordinate.js';
import Movement from './Movement.js';

export const mousemoveFactory = (
  $box,
  eventType,
  moveRange = 1,
  reverse = false,
  speed = 0.05,
) => {
  if (!eventType) {
    eventType = 'mousemove';
  }

  new Movement($box, new MouseCoordinate(eventType), moveRange, reverse, speed);
};
