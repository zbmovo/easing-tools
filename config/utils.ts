import path from 'path'

export function joinRoot(...paths: string[]) {
  return path.join(__dirname, '../', ...paths)
}