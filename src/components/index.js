import schema from './schema'

export default {
  init: ({ parentEl, metronome }) => {
    Object.keys(schema).map((componentSelector) => {
      parentEl.querySelectorAll(componentSelector).forEach((rootEl) => {
        const componentClass = schema[componentSelector]
        const component = new componentClass({ rootEl, metronome })
        component.init()
      })
    })
  },

  initComponent: ({ componentSelector, parentEl, metronome }) => {
    parentEl.querySelectorAll(componentSelector).forEach((rootEl) => {
      const componentClass = schema[componentSelector]
      const component = new componentClass({ rootEl, metronome })
      component.init()
    })
  }
}