import layout from './app/layout'
import components from './components'

import Metronome from './app/metronome'

export function init(containerSelector) {
  console.log('[Pickup Music] Metronome tool init...')

  const metronome = new Metronome()

  if (typeof document !== 'undefined') {
    // browser mode
    const containerEl = document.querySelector(containerSelector)
    if (!containerEl) {
      console.log('[Pickup Music] Metronome - no container found')
      return
    }
    
    // instantiate root UI element
    const rootEl = document.createElement("div")
    containerEl.appendChild(rootEl)

    // sets dummy layout
    rootEl.outerHTML = layout.main

    // init components
    window.addEventListener('load', () => {
      const options = {
        parentEl: containerEl.querySelector(".metronome-root"),
        metronome
      }
      console.log('[Pickup Music] Metronome tool - initializing components...')
      components.init(options)
    })
  } else {
    // Node mode
    console.log('[Pickup Music] Metronome - NodeJs')
  }
}