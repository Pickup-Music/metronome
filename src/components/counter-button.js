import Button from './controls/button'

class CounterButton extends Button {
  constructor(options) {
    super(options)
  }

  onClick(e) {
    this.metronome.setCounterPos(parseInt(this.el.dataset.pos))
  }
}

export default CounterButton