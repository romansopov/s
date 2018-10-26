const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const config = require('config')
const bodyParser = require('body-parser')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('./nuxt.config.js')

const PORT = config.get('port')

// Nuxt config
nuxtConfig.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(nuxtConfig)

// Start build process in dev mode
if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Body parser
app.use(bodyParser.json())

// Session config
app.use(session({
  store: new RedisStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

// Router
app.get('/test/', (req, res) => {
  res.send('test')
})

// Nuxt middleware
app.use(nuxt.render)

// Socket.io (test messages)
const messages = []
io.on('connection', (socket) => {
  socket.on('last-messages', function (fn) {
    fn(messages.slice(-50))
  })
  socket.on('send-message', function (message) {
    messages.push(message)
    socket.broadcast.emit('new-message', message)
  })
})

// Run
http.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`)
})
