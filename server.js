const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const config = require('config')
const bodyParser = require('body-parser')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const sessionStore = new RedisStore()
const nuxt = require('./nuxt')

const PORT = config.get('port')

// Body parser
app.use(bodyParser.json())

const middlewareSession = session({
  store: sessionStore,
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})
app.use((req, res, next) => {
  middlewareSession(req, res, next)
})

// Session config
io.use((socket, next) => {
  console.log('io.use', sessionStore)
  const data = socket.handshake || socket.request
  // console.log(data)
  next()
})

// Router
app.get('/test/', (req, res) => {
  res.send('test')
})

// Add POST - /api/login
app.post('/api/login', (req, res) => {
  // console.log(req.sessionID)
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
app.post('/api/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Nuxt
app.use(nuxt)

// Socket.io (test messages)
const messages = []
io.on('connection', (socket) => {
  // console.log(socket.handshake.sessionID)
  // console.log(socket.handshake.session)
  socket.on('last-messages', function (fn) {
    fn(messages.slice(-50))
  })
  socket.on('send-message', function (message) {
    console.log(socket.handshake)
    messages.push(message)
    socket.broadcast.emit('new-message', message)
  })
})

// Run
http.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`)
})
