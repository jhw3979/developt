import {SLIDE_REGEXP} from './consts.js';

const parseMarkdown = (contents) => contents
  .split(SLIDE_REGEXP)
  .map((content) => `
    <li class="slide">
      <svg class="slide-svg" viewBox="0 0 1280 720">
        <foreignObject width="1280" height="720">
          <section>
            ${marked(content)}
          </section>
        </foreignObject>
      </svg>
    </li>`)
  .join('');

export default parseMarkdown;
