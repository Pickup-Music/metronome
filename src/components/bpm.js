import BaseComponent from './base-component'

class BPM extends BaseComponent {
  constructor(options) {
    super(options)
  }

  init() {
    this.el.innerHTML = this.metronome.tempo
    this.metronome.on('tempo', ({tempo}) => {
      this.el.innerHTML = tempo
    })
  }
}

export default BPM