const { build } = require('esbuild')
const stylelint = require('esbuild-plugin-stylelint')

build({
  entryPoints: ['styles/index.css'],
  outfile: 'dist/index.css',
  bundle: true,
  minify: true,
  plugins: [
    stylelint(),
  ],
})
