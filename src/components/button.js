import BaseComponent from './base-component'

class Button extends BaseComponent {
  constructor(options) {
    super(options)
    this.pressing = false
  }

  init() {
    super.init()

    this.el.addEventListener('click', (e) => {
      e.preventDefault();
      this.onClick(e)
    })

    this.el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.startPressing(e)
    })

    this.el.addEventListener('mouseup', (e) => {
      e.preventDefault();
      this.endPressing(e)
    })

    this.el.addEventListener('mouseenter', (e) => {
      e.preventDefault();
      this.endPressing(e)
    })

    this.el.addEventListener('mouseleave', (e) => {
      e.preventDefault();
      this.endPressing(e)
    })
  }

  startPressing(e) {
    this.pressing = true
    this.onPressing(e)
    this.emitOnPress(e, 0)
  }

  endPressing(e) {
    this.pressing = false
    clearTimeout(this.pressingEvent)
  }

  emitOnPress(e, iteration) {
    this.pressingEvent = setTimeout(() => {
      this.onPressing(e)
      this.emitOnPress(e, iteration -= 3)
    }, 100 + iteration)
  }

  onClick() {}
  onPressing() {}
}

export default Button