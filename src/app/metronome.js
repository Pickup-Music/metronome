import Events from 'events'

const MIN_TEMPO = 20
const MAX_TEMPO = 400
const DEFAULT_TEMPO = 120
const BEEP_LENGTH = 0.1

class Metronome extends Events {
  constructor() {
    super()

    this.initialised = false
    this.playing = false
    this.tempo = DEFAULT_TEMPO
  }

  _init() {
    if (!this.initialised) {
      this.initialised = true

      this.Tone = require('tone')
      
      this.osc = new this.Tone.Oscillator().toDestination()
      this.Tone.Transport.scheduleRepeat((time) => {
        this.osc.start(time).stop(time + BEEP_LENGTH)
      }, "8n")
    }
  }

  _updateTempo(tempo) {
    this._init()

    this.tempo = Math.max(Math.min(tempo, MAX_TEMPO), MIN_TEMPO)
    this.Tone.Transport.bpm.value = this.tempo

    this.emit('tempo', { tempo })
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