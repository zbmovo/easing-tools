type handler = (progress: number, countTime: number) => void

export function setAnimationFrame(handler: handler, timeout: number) {
  const start = performance.now()
  let timer: number
  const animationFrame = window.requestAnimationFrame
    || ((callback) => window.setTimeout(callback, 1000 / 60))

  const cancel = window.cancelAnimationFrame
    || ((id) => window.clearTimeout(id))

  function step() {
    const elapsed = performance.now() - start;
    const progress = elapsed / timeout
    if (elapsed < timeout) {
      handler(progress, elapsed)
      timer = animationFrame(step)
    } else {
      // done
      handler(1, timeout)
    }
  }

  timer = animationFrame(step)
  return () => cancel(timer)
}

export function transition([form, to]: number[], value: number) {
  return form + value * (form - to) * -1
}
