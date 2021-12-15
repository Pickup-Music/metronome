import Events from 'events'
import constants from './constants'

class Metronome extends Events {
  constructor() {
    super()

    this.initialised = false
    this.playing = false
    this.tempo = constants.DEFAULT_TEMPO
    this.counters = null
    this.subdivision = constants.DEFAULT_SUBDIVISION
    this.taps = []
    this.tapTimeout = null
    this.timeSignature = [constants.TIME_SIGN_DEFAULT_FIRST, constants.TIME_SIGN_DEFAULT_SECOND]
    
    this.#updateCounters()
  }

  #init() {
    if (!this.initialised) {
      this.initialised = true

      this.Tone = require('tone')
      
      this.#setScheduler()
    }
  }

  #updateTempo(tempo) {
    this.#init()

    this.tempo = Math.max(Math.min(tempo, constants.MAX_TEMPO), constants.MIN_TEMPO)
    this.Tone.Transport.bpm.value = this.tempo

    this.emit('tempo', { tempo: this.tempo })
  }

  #updateSubdivision(value) {
    this.subdivision = value

    this.emit('subdivision', { subdivision: this.subdivision })
    this.restart()
  }

  #updateTimeSignatureNum(num, value) {
    this.#init()

    this.timeSignature[num] = parseInt(value)
    this.Tone.Transport.timeSignature = this.timeSignature

    if (num === 0) {
      this.#updateCounters()
    }

    this.restart()
  }

  #updateCounters(diffs) {
    const numCounters = this.timeSignature[0]
    // init counters
    if (!this.counters || !this.counters.length) {
      this.counters = [...Array(numCounters).keys()].map((c) => c ? 2 : 3)
    }
    // change amount of counters
    if (this.counters.length < numCounters) {
      this.counters.push(...[...Array(numCounters - this.counters.length).keys()].map((c) => 2))
    } else if (this.counters.length > numCounters) {
      this.counters.splice(numCounters, this.counters.length - numCounters)
    }
    // update from diffs
    if (diffs && diffs.length) {
      diffs.forEach((pos) => {
        if (pos >= 0 && pos < numCounters) {
          this.counters[pos] = this.counters[pos] < 3 ? this.counters[pos] + 1 : 0
        }
      })
    }
    this.emit('counters')
  }

  #setScheduler() {
    if (this.osc) {
      this.osc.dispose()
    }
    this.osc = new this.Tone.Oscillator(440).toDestination()
    this.osc.volume.value = 0
    this.currentTime = 0
    this.eventId = this.Tone.Transport.scheduleRepeat((time) => {
      if (this.counters[this.currentTime] === 3) {
        this.osc.volume.setValueAtTime(0, time)
        this.osc.frequency.setValueAtTime(880, time)
      } else {
        switch(this.counters[this.currentTime]) {
          case 0: this.osc.volume.setValueAtTime(-50, time)
            break
          case 1: this.osc.volume.setValueAtTime(-25, time)
            break
          case 2: this.osc.volume.setValueAtTime(0, time)
            break
        }
        this.osc.frequency.setValueAtTime(440, time)
      }

      this.osc.start(time).stop(time + constants.BEEP_LENGTH)
      this.emit('time', { time: this.currentTime })

      // advance current time
      this.currentTime++
      if (this.currentTime >= this.counters.length) {
        this.currentTime = 0
      }
    }, this.subdivision)
  }

  setCounterPos(pos) {
    this.#updateCounters([pos])
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
      this.#updateTempo(bpm)
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
    this.#init()

    if (this.playing) {
      this.Tone.Transport.stop()
      this.emit('stop')
    } else {
      this.Tone.Transport.start()
      this.emit('start')
    }

    this.playing = !this.playing
  }

  restart() {
    this.#init()
    this.Tone.Transport.stop()
    this.Tone.Transport.clear(this.eventId)
    this.#setScheduler()
    this.Tone.Transport.start()
    this.emit('start')
    this.playing = true
  }

  increaseBPM() {
    this.#updateTempo(this.tempo + 1)
  }

  decreaseBPM() {
    this.#updateTempo(this.tempo - 1)
  }
  
  setBPM(value) {
    this.#updateTempo(value || this.tempo)
  }

  setSubdivision(value) {
    this.#updateSubdivision(value)
  }

  setTimeSignatureNum(num, value) {
    this.#updateTimeSignatureNum(num, value)
  }
}

export default Metronome