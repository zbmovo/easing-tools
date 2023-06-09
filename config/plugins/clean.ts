import type { Plugin } from 'rollup'
import fs from 'fs'

export default function clean(paths: string[]): Plugin {
  return {
    name: 'clean',
    buildStart() {
      paths.forEach(item => {
        try {
          fs.rmSync(item, { recursive: true })
        } catch (error) {
          // 🤫
        }
      })
    },
  }
}
