module.exports = {
  modules: [
    ['@nuxtjs/axios', {
      baseURL: 'http://localhost:7000'
    }]
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'S.Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i' }
    ],
    script: [{
      src: '/js/kube.js'
    }]
  },
  css: [
    '~/assets/css/s.css'
  ]
  // plugins: [{ src: '~plugins/vue-carousel', ssr: false }]
}
