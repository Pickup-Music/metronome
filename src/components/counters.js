import BaseComponent from './controls/base-component'
import Components from './index'

class Counters extends BaseComponent {
  constructor(options) {
    super(options)
  }

  init() {
    super.init()

    this.el.innerHTML = this.renderCounters()
    this.metronome.on('counters', () => {
      this.el.innerHTML = this.renderCounters()
      Components.initComponent({
        componentSelector: '.metronome-counters__tile',
        parentEl: this.el,
        metronome: this.metronome
      })
    })
  }

  renderCounters() {
    return `
      <div class="metronome-counters__row">
      ${[...Array(this.metronome.counters.length).keys()].map((i) =>
        `<div
          class="metronome-counters__tile${this.metronome.counters[i] === 3 ? ' metronome-counters__tile--checked' : ''}"
          data-pos="${i}"
        ></div>`
        ).join("") }
      </div>
      <div class="metronome-counters__row">
      ${[...Array(this.metronome.counters.length).keys()].map((i) =>
        `<div
          class="metronome-counters__tile${this.metronome.counters[i] >= 2 ? ' metronome-counters__tile--checked' : ''}"
          data-pos="${i}"
        ></div>`
        ).join("") }
      </div>
      <div class="metronome-counters__row">
      ${[...Array(this.metronome.counters.length).keys()].map((i) =>
        `<div
          class="metronome-counters__tile${this.metronome.counters[i] >= 1 ? ' metronome-counters__tile--checked' : ''}"
          data-pos="${i}"
        ></div>`
        ).join("") }
      </div>
    `
  }
}

export default Counters