<template>
  <div>
    <Header></Header>

    <div class="is-wrapper">
      <div class="is-page is-container is-container-large is-stack-40">
        <div class="is-sidebar is-hidden-mobile">
          left sidebar
        </div>
        <div class="is-content">
          <button class="button is-destructive" @click="increment">
            {{ $store.state.shop.count }}
          </button>
          <ul>
            <li v-for="(item, index) in products" :key="index">
              <nuxt-link :to="{ name: 'products-id', params: { id: item.id } }">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
          {{ error }}
        </div>
      </div>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
  import { Header, Footer } from '@/components'

  export default {
    components: {
      Header, Footer
    },

    data() {
      return {
        error: null
      }
    },

    methods: {
      async increment() {
        try {
          await this.$store.dispatch('addProductToCart', {})
        } catch (e) {
          this.error = e.message
        }
      }
    },

    asyncData({ app }) {
      return app.$axios.get('/api/products/')
        .then((res) => {
          return { products: res.data }
        })
        .catch(e => {
          console.log(e)
        })
    }

  }
</script>
