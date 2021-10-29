import List from './list'

class TimeSignatureList extends List {
  constructor(options) {
    super(options)
  }

  onChange(e) {
    this.metronome.setTimeSignatureNum(parseInt(this.data.num), this.value)
  }
}

export default TimeSignatureList