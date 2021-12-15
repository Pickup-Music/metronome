import Events from 'events'

class BaseComponent extends Events {
  constructor({ rootEl, metronome }) {
    super()

    this.el = rootEl
    this.metronome = metronome
  }

  init() {}
}

export default BaseComponent