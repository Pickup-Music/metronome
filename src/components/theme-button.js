import Button from './controls/button'

const themes = ["default", "light", "wave", "dark"]

class ThemeButton extends Button {
  constructor(options) {
    super(options)
    this.currentTheme = 0 //default
    this.metronomeRootEl = document.querySelector(".metronome-root")
  }

  onClick(e) {
    // get next theme
    this.currentTheme = (this.currentTheme + 1) % themes.length
    // reset theme class
    themes.forEach((t) => { if (t !== "default") this.metronomeRootEl.classList.remove(`theme-${t}`) })
    // set next theme class
    if (this.currentTheme > 0) {
      this.metronomeRootEl.classList.add(`theme-${themes[this.currentTheme]}`)
    }
  }
}

export default ThemeButton