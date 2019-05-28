/* eslint-disable no-unused-vars */
import {
  TweenMax,
  TimelineLite,
  Power2,
  Elastic,
  CSSPlugin,
} from 'gsap/TweenMax'

/* eslint-enable */

export default {
  init() {
    // JavaScript to be fired on all pages

    // animación hover logo
    // https://stackoverflow.com/questions/56328415/random-css-animation-time-on-each-iteration/56328589#56328589

    let logo = document.getElementById('logo');
    let time, numero, divisor;
    logo.addEventListener('transitionend', iteration);

    logo.addEventListener('mouseover', function() {
      logo.classList.add('w-color');
      logo.classList.remove('stop');
      change();
    });

    logo.addEventListener('mouseout', function() {
      logo.classList.remove('w-color');
      logo.classList.add('stop');
      change();
    });

    function change() {
      logo.classList.toggle('change');
    }

    function iteration() {
      numero = Math.random();

      if (numero > 0.8) {
        divisor = 1;
      } else if (numero > 0.5) {
        divisor = 3;
      } else {
        divisor = 10;
      }

      time = (Math.random() + 0.4) / divisor;
      logo.style.setProperty('--animation-time', time + 's');
      change();
    }
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
}
