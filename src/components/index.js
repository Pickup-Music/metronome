import schema from './schema'

const initalisationComponents = [
  '.metronome-counters',
  '.metronome-theme',
  '.metronome-play',
  '.metronome-bpm__arrow--dec',
  '.metronome-bpm__arrow--inc',
  '.metronome-bpm__text',
  '.metronome-subdivision',
  '.metronome-time-signature__num',
  '.metronome-tap'
]

const initComponent = ({ componentSelector, parentEl, metronome }) => {
  const newComponents = []
  parentEl.querySelectorAll(componentSelector).forEach((rootEl) => {
    const componentClass = schema[componentSelector]
    const component = new componentClass({ rootEl, metronome })
    component.init()
    newComponents.push(component)
  })
  return newComponents
}

export default {
  init: ({ parentEl, metronome }) => {
    const metronomeUI = initComponent({
      componentSelector: '.metronome-content',
      parentEl,
      metronome
    })[0]
    initalisationComponents.map((componentSelector) => {
      parentEl.querySelectorAll(componentSelector).forEach((rootEl) => {
        const componentClass = schema[componentSelector]
        const component = new componentClass({ rootEl, metronome })
        metronomeUI.listen(component)
        component.init()
      })
    })
  },
  initComponent
}