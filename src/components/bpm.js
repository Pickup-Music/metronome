import Input from './controls/input'

class BPM extends Input {
  constructor(options) {
    super(options)
  }

  init() {
    super.init()

    this.el.value = this.metronome.tempo
    this.metronome.on('tempo', ({tempo}) => {
      this.el.value = tempo
    })
  }

  onChange() {
    this.metronome.setBPM(parseInt(this.el.value))
  }

  onKeyPress(e) {
    if (e.keyCode === 8) { //backspace or delete
      return true
    } else if (this.el.value.length >= 3) { //not more than 3 characters
      return false
    }
    if (e.keyCode < 48 || e.keyCode > 58) { //validate only numbers as input
      return false
    }
    try { parseInt(this.el.value) } catch { return false } //only numbers
    return true
  }
}

export default BPM