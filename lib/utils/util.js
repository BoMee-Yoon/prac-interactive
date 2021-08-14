export const $ = (className) => document.querySelector(className);

const randomColor = () => Math.floor(Math.random() * 225);

export const changeBackgroundColor = ($el) => {
  const color = randomColor();
  $el.style.backgroundColor = `rgba(${color}, ${color}, ${color})`;
};
