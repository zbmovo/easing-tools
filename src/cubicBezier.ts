export function cubicBezierWithMath(P0: number, P1: number, P2: number, P3: number) {
  return (t: number) => {
    return P0 * Math.pow(1 - t, 3) +
      3 * P1 * t * Math.pow(1 - t, 2) +
      3 * P2 * Math.pow(t, 2) * (1 - t) +
      P3 * Math.pow(t, 3)
  }
}

export function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const points = {
    P0: [0, 0],
    P1: [x1, y1],
    P2: [x2, y2],
    P3: [1, 1],
  }

  return cubicBezierWithMath(
    points.P0[1],
    points.P1[1],
    points.P2[1],
    points.P3[1],
  )
}


