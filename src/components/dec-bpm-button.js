import Button from './button'

class DecBpmButton extends Button {
  constructor(options) {
    super(options)
  }

  onClick(e) {
    this.metronome.decreaseBPM()
  }
}

export default DecBpmButton