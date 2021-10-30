import resources from '../resources'
import constants from './constants'
import "../style.scss";

export default {
  main: `
  <div class="metronome-root">
    <div class="metronome-header">
      <img src="${resources.logo}" class="metronome-header__logo" />
    </div>
    <div class="metronome-container">
      <div class="metronome-counters">
        <div class="metronome-counters__row">
        ${[...Array(constants.TIME_SIGN_DEFAULT_FIRST).keys()].map((i) =>
          `<div class="metronome-counters__tile" data-pos="${i}"></div>`
          ).join("") }
        </div>
        <div class="metronome-counters__row">
        ${[...Array(constants.TIME_SIGN_DEFAULT_FIRST).keys()].map((i) =>
          `<div class="metronome-counters__tile" data-pos="${i}"></div>`
          ).join("") }
        </div>
        <div class="metronome-counters__row">
        ${[...Array(constants.TIME_SIGN_DEFAULT_FIRST).keys()].map((i) =>
          `<div class="metronome-counters__tile" data-pos="${i}"></div>`
          ).join("") }
        </div>
      </div>
      <div class="metronome-bpm__background">
        <div class="metronome-bpm">
          <div class="metronome-bpm__arrow metronome-bpm__arrow--dec">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill="#111" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill="#111" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(-.03541-.00013-.00013.03541 19.02 3.02)" fill="#111"/></svg>  
          </div>
          <div class="metronome-bpm__content">
            <div class="metronome-bpm__text">${constants.DEFAULT_TEMPO}</div>
            <div class="metronome-bpm__caption">BPM</div>
          </div>
          <div class="metronome-bpm__arrow metronome-bpm__arrow--inc">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill="#111" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill="#111" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#111"/></svg>
          </div>
        </div>
      </div>
      <div class="metronome-controllers">
        <div class="metronome-time-signature metronome-button">
          <select class="metronome-time-signature__num" data-num="0">
            ${[...Array(12).keys()].map((i) => `<option value="${i+1}"${i+1 === constants.TIME_SIGN_DEFAULT_FIRST ? ' selected' : ''}>${i+1}</option>`).join("") }
          </select>
          /
          <select class="metronome-time-signature__num" data-num="1">
            ${[...Array(4).keys()].map((i) => `<option value="${i+1}"${i+1 === constants.TIME_SIGN_DEFAULT_SECOND ? ' selected' : ''}>${i+1}</option>`).join("") }
          </select>
        </div>
        <div class="metronome-play metronome-button">
          <img src="${resources.play}" class="metronome-play__icon" />
        </div>
        <div class="metronome-tap metronome-button">TAP</div>
      </div>
      <div class="metronome-subdivisions">
        <div class="metronome-subdivision metronome-button" data-value="4n">${resources.noteChar}</div>
        <div class="metronome-subdivision metronome-button" data-value="4n.">${resources.noteChar}</div>
        <div class="metronome-subdivision metronome-button" data-value="8n">${resources.noteChar}</div>
        <div class="metronome-subdivision metronome-button" data-value="8n.">${resources.noteChar}</div>
      </div>
    </div>
  </div>
  `
}