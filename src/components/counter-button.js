import Button from './button'

class CounterButton extends Button {
  constructor(options) {
    super(options)
  }

  onClick(e) {
    this.metronome.setCounterPos(parseInt(this.data.pos))
  }
}

export default CounterButton