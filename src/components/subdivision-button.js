import Button from './controls/button'

class SubDivisionButton extends Button {
  constructor(options) {
    super(options)
  }

  onClick(e) {
    this.metronome.setSubdivision(this.el.dataset.value)
  }
}

export default SubDivisionButton