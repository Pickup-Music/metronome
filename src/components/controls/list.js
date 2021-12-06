import BaseComponent from './base-component'

class List extends BaseComponent {
  constructor(options) {
    super(options)
  }

  init() {
    super.init()

    this.value = this.el.value

    this.el.addEventListener('change', (e) => {
      e.preventDefault();
      this.value = this.el.value
      this.onChange(e)
    })
  }

  onChange() {}
}

export default List