'use strict';

(function sliding() {
  const slider = document.querySelector('.slider');
  const radios = [
    document.getElementById(`slider__radio--1`),
    document.getElementById(`slider__radio--2`),
    document.getElementById(`slider__radio--3`),
    document.getElementById(`slider__radio--4`),
  ];

  const timer = setInterval(() => {
    for (const i in radios) {
      if (radios[i].checked) {
        if (radios[i] === radios[radios.length - 1]) {
          radios[0].checked = true;
        } else {
          radios[+i + 1].checked = true;
        }
        break;
      }
    }
  }, 10000);

  slider.onmouseenter = () => {
    clearInterval(timer);
    slider.onmouseleave = sliding;
  };
})();
