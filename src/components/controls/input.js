import BaseComponent from './base-component'

class Input extends BaseComponent {
  constructor(options) {
    super(options)
  }

  init() {
    super.init()

    this.el.addEventListener('change', (e) => {
      e.preventDefault();
      this.onChange()
    })

    this.el.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) { //enter
        this.onChange()
      } else {
        if (!this.onKeyPress(e)) {
          e.preventDefault()
        }
      }
    })

    this.el.addEventListener('focusout', (e) => {
      e.preventDefault();
      this.onChange()
    })
  }

  onChange() {}
  onKeyPress() {}
}

export default Input