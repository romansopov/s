<template>
    <div>
        <ul class="pages">
            <li class="chat page">
                <div class="chatArea">
                    <p>{{ $store.state.authUser.username }}!</p>
                    <p>SID: {{ $store.state.sessionId}}</p>
                    <ul ref="messages" class="messages">
                        <li v-for="(message, index) in messages" :key="index" class="message">
                            <i :title="message.date">{{ message.date.split('T')[1].slice(0, -2) }}</i>: {{ message.text }}
                        </li>
                    </ul>
                </div>
                <input v-model="message" class="inputMessage" type="text" placeholder="Type here..." @keyup.enter="sendMessage">
            </li>
        </ul>
    </div>
</template>

<script>
  import io from '~/plugins/socket.io'
  let socket = null

  export default {

    data() {
      return {
        message: '',
        messages: []
      }
    },

    watch: {
      'messages': 'scrollToBottom'
    },
    beforeMount() {
      socket = io('http://127.0.0.1:7000', {
        query: {
          token: this.$store.state.sessionId
        }
      })
      socket.on('new-message', (message) => {
        this.messages.push(message)
      })
    },
    mounted() {
      this.scrollToBottom()
    },
    methods: {
      sendMessage() {
        if (!this.message.trim()) return
        const message = {
          date: new Date().toJSON(),
          text: this.message.trim()
        }
        this.messages.push(message)
        this.message = ''
        console.log(socket)
        socket.emit('send-message', message)
      },
      scrollToBottom() {
        this.$nextTick(() => {
          this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
        })
      }
    },
    head: {
      title: 'Nuxt.js with Socket.io'
    }
  }

</script>
