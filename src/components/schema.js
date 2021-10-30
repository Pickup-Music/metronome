import PlayButton from './play-button'
import DecBpmButton from './dec-bpm-button'
import IncBpmButton from './inc-bpm-button'
import SubDivisionButton from './subdivision-button'
import Counters from './counters'
import CounterButton from './counter-button'
import BPM from './bpm'
import TimeSignatureList from './time-signature-list'
import TapButton from './tap-button'

export default {
  '.metronome-counters': Counters,
  '.metronome-counters__tile': CounterButton,
  '.metronome-play': PlayButton,
  '.metronome-bpm__arrow--dec': DecBpmButton,
  '.metronome-bpm__arrow--inc': IncBpmButton,
  '.metronome-bpm__text': BPM,
  '.metronome-subdivision': SubDivisionButton,
  '.metronome-time-signature__num': TimeSignatureList,
  '.metronome-tap': TapButton
}