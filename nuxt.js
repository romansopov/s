const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('./nuxt.config.js')

// Nuxt config
nuxtConfig.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(nuxtConfig)

console.log(`ENV: ${process.env.NODE_ENV}`)

// Start build process in dev mode
if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

module.exports = nuxt.render
