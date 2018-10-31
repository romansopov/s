const fs = require('fs')
const config = require('config')
const restify = require('restify')
const server = restify.createServer()
const socketio = require('socket.io')
const io = socketio.listen(server.server)
const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('./nuxt.config.js')

// Nuxt config
nuxtConfig.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(nuxtConfig)

// Start build process in dev mode
if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

server.use(function(req, res, next) {
  console.warn('run for all routes!');
  return next();
});

server.get('/', (req, res, next) => {
  console.log('get /')
  return next()
})

server.pre(nuxt.render)

// Socket.io (test messages)
const messages = []
io.on('connection', (socket) => {
  console.log(socket.handshake.sessionID)
  console.log(socket.handshake.session)
  socket.on('last-messages', function (fn) {
    fn(messages.slice(-50))
  })
  socket.on('send-message', function (message) {
    console.log(socket.handshake.session)
    messages.push(message)
    socket.broadcast.emit('new-message', message)
  })
})

server.listen(7001, function () {
  console.log('socket.io server listening at %s', server.url)
})
