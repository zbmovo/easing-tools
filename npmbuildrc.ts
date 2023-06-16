import { presets } from 'npm-package-build'
import type { UserConfig } from 'npm-package-build'

export default <Partial<UserConfig>>{
  rollup(config) {

    if (config.output instanceof Array) {
      config.output.push(
        // umd
        presets.output.umd({
          name: 'easing-tools',
          sourcemap: true
        }),

        // umd min
        presets.output.umd({
          name: 'easing-tools',
          entryFileNames: '[name].min.js',
          sourcemap: true,
          plugins: [
            presets.plugins.terser()
          ]
        }),
      )
    }

  }
}