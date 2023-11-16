const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const hljs = require('highlight.js');

module.exports = withNextra()
