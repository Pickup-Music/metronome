import resources from '../resources'
import constants from './constants'
import "../style.scss";

export default {
  main: `
  <div class="metronome-root">
    <div class="metronome-header">
      <img src="${resources.logo}" class="metronome-header__logo" />
      <img src="${resources.logoDark}" class="metronome-header__logo metronome-header__logo--dark" />
      <div class="metronome-theme metronome-button">
        <svg class="metronome-theme__icon metronome-theme__icon--default" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z" fill="#333333"/>
        </svg>
        <svg class="metronome-theme__icon metronome-theme__icon--light" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5.4375C7.24023 5.4375 5.8125 6.89844 5.8125 8.625C5.8125 10.3848 7.24023 11.8125 9 11.8125C10.7266 11.8125 12.1875 10.3848 12.1875 8.625C12.1875 6.89844 10.7266 5.4375 9 5.4375ZM17.168 8.12695L14.0137 6.56641L15.1426 3.21289C15.2754 2.78125 14.8438 2.34961 14.4121 2.48242L11.0586 3.61133L9.49805 0.457031C9.29883 0.0253906 8.66797 0.0253906 8.46875 0.457031L6.9082 3.61133L3.55469 2.48242C3.12305 2.34961 2.69141 2.78125 2.82422 3.21289L3.95312 6.56641L0.798828 8.12695C0.367188 8.32617 0.367188 8.95703 0.798828 9.15625L3.95312 10.7168L2.82422 14.0703C2.69141 14.502 3.12305 14.9336 3.55469 14.8008L6.9082 13.6719L8.46875 16.8262C8.66797 17.2578 9.29883 17.2578 9.49805 16.8262L11.0586 13.6719L14.4121 14.8008C14.8438 14.9336 15.2754 14.502 15.1426 14.0703L14.0137 10.7168L17.168 9.15625C17.5996 8.95703 17.5996 8.32617 17.168 8.12695ZM11.9883 11.6465C10.3281 13.3066 7.63867 13.3066 5.97852 11.6465C4.31836 9.98633 4.31836 7.29688 5.97852 5.63672C7.63867 3.97656 10.3281 3.97656 11.9883 5.63672C13.6484 7.29688 13.6484 9.98633 11.9883 11.6465Z" fill="#333333"/>
        </svg>
        <svg class="metronome-theme__icon metronome-theme__icon--dark" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.89648 17.125C11.5195 17.125 13.9102 15.9629 15.5039 14.0039C15.7363 13.7051 15.4707 13.2734 15.1055 13.3398C10.9883 14.1367 7.20312 10.9824 7.20312 6.79883C7.20312 4.4082 8.46484 2.2168 10.5566 1.02148C10.8887 0.822266 10.7891 0.357422 10.4238 0.291016C9.92578 0.191406 9.42773 0.158203 8.89648 0.125C4.18164 0.125 0.396484 3.94336 0.396484 8.625C0.396484 13.3398 4.18164 17.125 8.89648 17.125Z" fill="white"/>
        </svg>
        <svg class="metronome-theme__icon metronome-theme__icon--wave" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.803 13.207l-.829 1.093-1.554-3.826c-.077-.189-.244-.306-.437-.306-.157 0-.356.084-.444.321l-1.356 3.664-1.872-8.759c-.062-.291-.288-.394-.462-.394-.203 0-.428.131-.473.424l-1.629 10.581-1.658-6.968c-.067-.282-.291-.382-.463-.382-.167 0-.374.092-.453.349l-1.453 4.753-1.07-2.53c-.078-.185-.245-.299-.436-.299-.154 0-.294.076-.385.209l-1.257 1.805-.087.058h-2.985c-.276 0-.5.224-.5.5s.224.5.5.5h3.284c.152 0 .296-.074.386-.206l.948-1.353 1.24 2.929c.079.187.241.299.433.299.211 0 .39-.138.455-.35l1.324-4.332 1.814 7.629c.068.283.282.384.46.384.203 0 .428-.131.473-.425l1.605-10.425 1.673 7.83c.058.272.277.395.467.395.202 0 .366-.12.441-.321l1.5-4.049 1.426 3.51c.077.189.245.306.438.306.152 0 .292-.075.382-.206l1.146-1.583.087-.046h3.026c.272 0 .492-.22.492-.492s-.22-.494-.492-.494h-3.322c-.151 0-.294.077-.383.207z" fill="#333333"/>
        </svg>
      </div>
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
            <div><input class="metronome-bpm__text" type="text" inputmode="numeric" pattern="[0-9]*" value="${constants.DEFAULT_TEMPO}" /></div>
            <div class="metronome-bpm__caption">BPM</div>
          </div>
          <div class="metronome-bpm__arrow metronome-bpm__arrow--inc">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><path fill="#111" d="m-7 1024.36h34v34h-34z"/></clipPath><clipPath><path fill="#111" d="m-6 1028.36h32v32h-32z"/></clipPath></defs><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#111"/></svg>
          </div>
        </div>
      </div>
      <div class="metronome-controllers-background">
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
            <svg class="metronome-play__icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="metronome-play__icon-path" d="M27 13.0359C29.6667 14.5755 29.6667 18.4245 27 19.9641L6.74999 31.6554C4.08333 33.195 0.749998 31.2705 0.749999 28.1913L0.75 4.80865C0.75 1.72945 4.08333 -0.195047 6.75 1.34455L27 13.0359Z" fill="#333333"/>
            </svg>
          </div>
          <div class="metronome-tap metronome-button">TAP</div>
        </div>
      </div>
      <div class="metronome-subdivisions">
        <div class="metronome-subdivision metronome-button" data-value="4n.">
          <img src="${resources.note}" class="metronome-subdivision__icon" />
          <img src="${resources.noteDark}" class="metronome-subdivision__icon metronome-subdivision__icon--dark" />
        </div>
        <div class="metronome-subdivision metronome-button" data-value="4n">
          <img src="${resources.note}" class="metronome-subdivision__icon" />
          <img src="${resources.noteDark}" class="metronome-subdivision__icon metronome-subdivision__icon--dark" />
        </div>
        <div class="metronome-subdivision metronome-button" data-value="8n.">
          <img src="${resources.note}" class="metronome-subdivision__icon" />
          <img src="${resources.noteDark}" class="metronome-subdivision__icon metronome-subdivision__icon--dark" />
        </div>
        <div class="metronome-subdivision metronome-button" data-value="8n">
          <img src="${resources.note}" class="metronome-subdivision__icon" />
          <img src="${resources.noteDark}" class="metronome-subdivision__icon metronome-subdivision__icon--dark" />
        </div>
      </div>
    </div>
  </div>
  `
}