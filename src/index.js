export function init(containerSelector) {
  console.log('[Pickup Music] Metronome tool init...')

  if (typeof document !== 'undefined') {
    // Browser mode
    const containerEl = document.querySelector(containerSelector)
    if (!containerEl) {
      console.log('[Pickup Music] Metronome - no container found')
      return
    }
    
    const rootEl = document.createElement("div")
    containerEl.appendChild(rootEl)

    rootEl.outerHTML = `
      <div class="metronome-root">
        Rendered from component!
      </div>
    `
  } else {
    // Node mode
    console.log('[Pickup Music] Metronome - NodeJs')
  }
}