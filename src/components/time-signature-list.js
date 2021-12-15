import List from './controls/list'

class TimeSignatureList extends List {
  constructor(options) {
    super(options)
  }

  onChange(e) {
    if (this.el.dataset.num) {
      this.metronome.setTimeSignatureNum(parseInt(this.el.dataset.num), this.value)
    }
  }
}

export default TimeSignatureList