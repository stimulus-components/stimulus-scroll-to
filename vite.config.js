const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-scroll-to'
    },
    rollupOptions: {
      external: ['stimulus'],
      output: {
        globals: {
          stimulus: 'Stimulus'
        }
      }
    }
  }
}
