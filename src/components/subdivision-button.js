import Button from './button'

class SubDivisionButton extends Button {
  constructor(options) {
    super(options)
  }

  onClick(e) {
    this.metronome.setSubdivision(this.data.value)
  }
}

export default SubDivisionButton