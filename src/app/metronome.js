import Events from 'events'
import constants from './constants'

class Metronome extends Events {
  constructor() {
    super()

    this.initialised = false
    this.playing = false
    this.tempo = constants.DEFAULT_TEMPO
  }

  _init() {
    if (!this.initialised) {
      this.initialised = true

      this.Tone = require('tone')
      
      this.osc = new this.Tone.Oscillator().toDestination()
      this.Tone.Transport.scheduleRepeat((time) => {
        this.osc.start(time).stop(time + constants.BEEP_LENGTH)
      }, "8n")
    }
  }

  _updateTempo(tempo) {
    this._init()

    this.tempo = Math.max(Math.min(tempo, constants.MAX_TEMPO), constants.MIN_TEMPO)
    this.Tone.Transport.bpm.value = this.tempo

    this.emit('tempo', { tempo: this.tempo })
  }

  play() {
    this._init()

    if (this.playing) {
      this.Tone.Transport.stop()
    } else {
      this.Tone.Transport.start()
    }

    this.playing = !this.playing
  }

  increaseBPM() {
    this._updateTempo(this.tempo + 1)
  }

  decreaseBPM() {
    this._updateTempo(this.tempo - 1)
  }
}

export default Metronome