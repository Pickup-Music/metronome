class BaseComponent {
  constructor({ rootEl, metronome }) {
    this.el = rootEl
    this.metronome = metronome
    this.data = {}
  }

  init() {
    const dataAttrs = this.el.getAttributeNames().filter((attr) => attr.startsWith("data-"))
    if (dataAttrs && dataAttrs.length) {
      dataAttrs.forEach((attr) => {
        this.data[attr.substr(5)] = this.el.getAttribute(attr)
      })
    }
  }
}

export default BaseComponent