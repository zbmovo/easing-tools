export function rotateX(i: number) {
  const s = Math.sin(Math.PI / 180 * i)
  const c = Math.cos(Math.PI / 180 * i)
  return [
    1, 0, 0, 0,
    0, c, -s, 0,
    0, s, c, 0,
    0, 0, 0, 1,
  ]
}

export function rotateY(i: number) {
  const s = Math.sin(Math.PI / 180 * i)
  const c = Math.cos(Math.PI / 180 * i)
  return [
    c, 0, s, 0,
    0, 1, 0, 0,
    -s, 0, c, 0,
    0, 0, 0, 1,
  ]
}

export function rotateZ(i: number) {
  const s = Math.sin(Math.PI / 180 * i)
  const c = Math.cos(Math.PI / 180 * i)
  return [
    c, -s, 0, 0,
    s, c, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
  ]
}

export function translation(x: number, y: number, z: number) {
  return [
    1, 0, 0, x,
    0, 1, 0, y,
    0, 0, 1, z,
    0, 0, 0, 1,
  ]
}

export function scale(x: number, y: number, z: number) {
  return [
    x, 0, 0, 0,
    0, y, 0, 0,
    0, 0, z, 0,
    0, 0, 0, 1,
  ]
}