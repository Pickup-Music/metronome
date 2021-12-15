import Button from './controls/button'

class SubDivisionButton extends Button {
  constructor(options) {
    super(options)
  }

  init() {
    super.init()

    this.metronome.on('subdivision', ({ subdivision }) => {
      const iconEl = this.el.querySelector('.metronome-subdivision__icon')
      if (this.el.dataset.value === subdivision) {
        iconEl.classList.contains('metronome-subdivision__icon--disabled') && iconEl.classList.remove('metronome-subdivision__icon--disabled')
      } else {
        !iconEl.classList.contains('metronome-subdivision__icon--disabled') && iconEl.classList.add('metronome-subdivision__icon--disabled')
      }
    })

    this.emit('subdivisions-ready')
  }

  onClick(e) {
    this.metronome.setSubdivision(this.el.dataset.value)
  }
}

export default SubDivisionButton