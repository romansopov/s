module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{
      src: '/js/kube.js'
    }]
  },
  css: [
    '~/assets/css/kube.css',
    '~/assets/themes/kube.theme.css',
    '~/assets/css/site.css'
  ]
}
