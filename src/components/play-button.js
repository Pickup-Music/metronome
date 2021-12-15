import Button from './controls/button'

class PlayButton extends Button {
  constructor(options) {
    super(options)

    this.metronomeRootEl = document.querySelector(".metronome-root")
  }

  init() {
    super.init()

    this.metronome.on('start', () => {
      this.metronomeRootEl.classList.add('playing')
    })
    this.metronome.on('stop', () => {
      this.metronomeRootEl.classList.remove('playing')
    })
  }

  onClick(e) {
    this.metronome.play()
  }
}

export default PlayButton