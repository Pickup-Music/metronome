class BaseComponent {
  constructor({ rootEl, metronome }) {
    this.el = rootEl
    this.metronome = metronome
  }

  init() {}
}

export default BaseComponent