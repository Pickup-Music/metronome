import Button from './controls/button'

class PlayButton extends Button {
  constructor(options) {
    super(options)
  }

  onClick(e) {
    this.metronome.play()
  }
}

export default PlayButton