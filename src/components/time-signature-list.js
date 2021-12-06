import List from './controls/list'

class TimeSignatureList extends List {
  constructor(options) {
    super(options)
  }

  onChange(e) {
    this.metronome.setTimeSignatureNum(parseInt(this.el.dataset.num), this.value)
  }
}

export default TimeSignatureList