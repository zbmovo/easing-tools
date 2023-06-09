type handler = (progress: number, countTime: number) => void

export function setAnimationFrame(handler: handler, timeout: number) {
  const now = performance.now()
  let timer: number

  function running() {
    timer = requestAnimationFrame(running)
    let countTime = performance.now() - now
    let progress = countTime / timeout
    if (progress >= 1) {
      progress = 1
      cancelAnimationFrame(timer)
    }
    handler(progress, countTime)
  }

  running()
  return () => cancelAnimationFrame(timer)
}

export function transition([form, to]: number[], value: number) {
  return form + value * (form - to) * -1
}
