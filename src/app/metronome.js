import Events from 'events'
import constants from './constants'

class Metronome extends Events {
  constructor() {
    super()

    this.initialised = false
    this.playing = false
    this.tempo = constants.DEFAULT_TEMPO
    this.counters = constants.TIME_SIGN_DEFAULT_FIRST
    this.timeSignature = [constants.TIME_SIGN_DEFAULT_FIRST, constants.TIME_SIGN_DEFAULT_SECOND]
    this.subdivision = constants.DEFAULT_SUBDIVISION
    this.taps = []
    this.tapTimeout = null
  }

  _init() {
    if (!this.initialised) {
      this.initialised = true

      this.Tone = require('tone')
      
      this._setScheduler()
    }
  }

  _updateTempo(tempo) {
    this._init()

    this.tempo = Math.max(Math.min(tempo, constants.MAX_TEMPO), constants.MIN_TEMPO)
    this.Tone.Transport.bpm.value = this.tempo

    this.emit('tempo', { tempo: this.tempo })
  }

  _updateSubdivision(value) {
    this._init()
    
    this.subdivision = value

    this.emit('subdivision', { subdivision: this.subdivision })
    this.restart()
  }

  _updateTimeSignatureNum(num, value) {
    this._init()

    this.timeSignature[num] = parseInt(value)
    this.Tone.Transport.timeSignature = this.timeSignature

    if (num === 0) {
      this.counters = this.timeSignature[0]
      this.emit('counters')
    }

    this.restart()
  }

  _setScheduler() {
    if (this.osc) {
      this.osc.dispose()
    }
    this.osc = new this.Tone.Oscillator().toDestination()
    this.eventId = this.Tone.Transport.scheduleRepeat((time) => {
      this.osc.start(time).stop(time + constants.BEEP_LENGTH)
    }, this.subdivision)
  }

  tap() {
    if (this.tapTimeout) {
      clearTimeout(this.tapTimeout)
    }

    this.taps.push(new Date())
    if (this.taps.length > 4) {
      this.taps = this.taps.slice(-4)
    }

    if (this.taps.length >= 3) {
      const avgTimeInMilliseconds = this.taps.reduceRight((sum, currDate, currIndex, arr) => {
        const diff = currIndex > 0 ? (currDate.getTime() - arr[currIndex-1].getTime()) : 0
        return sum + diff
      }, 0) / (this.taps.length - 1)
      const bpm = Math.floor((60 * 1000) / avgTimeInMilliseconds)
      this._updateTempo(bpm)
      this.emit('cleartap')
    } else {
      this.emit('keeptapping')
    }

    this.tapTimeout = setTimeout(() => {
      this.taps = []
      this.emit('cleartap')
    }, 1000)
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

  restart() {
    this._init()
    this.Tone.Transport.stop()
    this.Tone.Transport.clear(this.eventId)
    this._setScheduler()
    this.Tone.Transport.start()
    this.playing = true
  }

  increaseBPM() {
    this._updateTempo(this.tempo + 1)
  }

  decreaseBPM() {
    this._updateTempo(this.tempo - 1)
  }

  setSubdivision(value) {
    this._updateSubdivision(value)
  }

  setTimeSignatureNum(num, value) {
    this._updateTimeSignatureNum(num, value)
  }
}

export default Metronome