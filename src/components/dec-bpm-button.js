import Button from './button'

class DecBpmButton extends Button {
  constructor(options) {
    super(options)
  }

  onPressing(e) {
    this.metronome.decreaseBPM()
  }
}

export default DecBpmButton