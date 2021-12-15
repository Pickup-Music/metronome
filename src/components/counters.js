import BaseComponent from './controls/base-component'
import Components from './index'

class Counters extends BaseComponent {
  constructor(options) {
    super(options)

    this.currentTime = -1
    this.playing = false
  }

  init() {
    super.init()

    this.renderCounters()
    this.metronome.on('counters', () => {
      this.renderCounters()
      Components.initComponent({
        componentSelector: '.metronome-counters__tile',
        parentEl: this.el,
        metronome: this.metronome
      })
    })
    this.metronome.on('time', ({ time }) => {
      if (this.playing) {
        this.currentTime = time
        this.renderTime()
      }
    })
    this.metronome.on('start', () => {
      this.playing = true
    })
    this.metronome.on('stop', () => {
      this.playing = false
      this.clearTime()
    })

    this.emit('counters-ready')
  }

  renderCounters() {
    this.el.innerHTML = `
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
    this.renderTime()
  }

  renderTime() {
    this.clearTime()
    if (this.playing) {
      this.el.querySelectorAll('.metronome-counters__row').forEach((rowEl) => {
        const currentTime = this.currentTime
        rowEl.querySelectorAll('.metronome-counters__tile').forEach((colEl, i) => {
          if (i == currentTime) {
            colEl.classList.add('metronome-counters__tile--highlighted')
          }
        })
      })
    }
  }

  clearTime() {
    this.el.querySelectorAll('.metronome-counters__tile--highlighted').forEach((colEl) => {
      colEl.classList.remove('metronome-counters__tile--highlighted')
    })
  }
}

export default Counters