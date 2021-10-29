import Button from './button'

class TapButton extends Button {
  constructor(options) {
    super(options)
  }

  onClick(e) {
    this.metronome.tap()
  }
}

export default TapButton