import BaseComponent from './controls/base-component'

class MetronomeUI extends BaseComponent {
  constructor(options) {
    super(options)

    this.initialised = false
    this.readyChecks = {
      counters: false,
      subdivisions: false
    }
  }

  init() {
    super.init()

    setTimeout(() => {
      this.initChecker()
    }, 10)
  }

  initChecker() {
    if (Object.keys(this.readyChecks).reduce((p, c) => p && this.readyChecks[c], true)) {
      this.initialised = true
      this.el.parentElement.classList.contains('metronome-loading-state') && this.el.parentElement.classList.remove('metronome-loading-state')
    } else {
      setTimeout(() => {
        this.initChecker()
      }, 10)
    }
  }

  listen(component) {
    component.on('counters-ready', () => {
      if (!this.initialised) {
        this.readyChecks.counters = true
      }
    })

    component.on('subdivisions-ready', () => {
      if (!this.initialised) {
        this.readyChecks.subdivisions = true
      }
    })
  }
}

export default MetronomeUI