import {NEXT_KEYS, PREV_KEYS} from './consts.js';

const fullscreenEl = document.querySelector('.fullscreen-section');
let slideEls;
let index;

const startFullscreen = async els => {
  slideEls = els;
  index = 0;
  await fullscreenEl.requestFullscreen();
  fullscreenEl.innerHTML = slideEls[0].outerHTML;
  fullscreenEl.hidden = false;
};

const changeSlide = ({code}) => {
  if (NEXT_KEYS.includes(code) && index + 1 < slideEls.length) {
    fullscreenEl.innerHTML = slideEls[++index].outerHTML;
  }
  if (PREV_KEYS.includes(code) && index - 1 >= 0) {
    fullscreenEl.innerHTML = slideEls[--index].outerHTML;
  }
};

const changeFullscreen = () => {
  if (document.fullscreenElement) {
    document.addEventListener('keydown', changeSlide);
    return;
  }
  document.removeEventListener('keydown', changeSlide);
  fullscreenEl.innerHTML = '';
  fullscreenEl.hidden = true;
};

document.addEventListener('fullscreenchange', changeFullscreen);

export default startFullscreen;
