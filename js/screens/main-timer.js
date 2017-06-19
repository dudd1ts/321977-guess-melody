import getElementFromTemplate from '../getElement';

const timerTemplate = (time) => `<div class="main-timer">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
  </svg>
  <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">0${Math.floor(time / 60)}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">0${time % 60}</span>
    </div>
</div>`;

const showTimer = (time) => {
  const appElement = document.querySelector(`.app`);
  const timerElement = getElementFromTemplate(timerTemplate(time));
  appElement.insertBefore(timerElement, appElement.firstChild);
};

export default showTimer;
