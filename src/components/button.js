import BaseComponent from './base-component'

class Button extends BaseComponent {
  constructor(options) {
    super(options)
  }

  init() {
    this.el.addEventListener('click', (e) => {
      this.onClick(e)
    })
  }

  onClick() {}
}

export default Button