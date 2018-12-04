<template>
  <div>
    <h1>{{ post.title }}</h1>
    <pre>{{ post.body }}</pre>
    <p>
      <nuxt-link to="/products">
        Back to the list
      </nuxt-link>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    async asyncData({ params }) {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      return { post: data }
    },
    head() {
      return {
        title: this.post.title
      }
    }
  }
</script>
