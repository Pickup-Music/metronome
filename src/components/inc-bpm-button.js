import Button from './button'

class IncBpmButton extends Button {
  constructor(options) {
    super(options)
  }

  onPressing(e) {
    this.metronome.increaseBPM()
  }
}

export default IncBpmButton