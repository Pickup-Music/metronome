import BaseComponent from './base-component'

class Counters extends BaseComponent {
  constructor(options) {
    super(options)
  }

  init() {
    super.init()

    this.el.innerHTML = this.renderCounters()
    this.metronome.on('counters', () => {
      this.el.innerHTML = this.renderCounters()
    })
  }

  renderCounters() {
    return `
      <div class="metronome-counters__row">
      ${[...Array(this.metronome.counters).keys()].map((i) => `<div class="metronome-counters__tile"></div>`).join("") }
      </div>
      <div class="metronome-counters__row">
      ${[...Array(this.metronome.counters).keys()].map((i) => `<div class="metronome-counters__tile"></div>`).join("") }
      </div>
      <div class="metronome-counters__row">
      ${[...Array(this.metronome.counters).keys()].map((i) => `<div class="metronome-counters__tile"></div>`).join("") }
      </div>
    `
  }
}

export default Counters