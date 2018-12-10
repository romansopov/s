<template>
  <div>
    <!--
<nuxt-link to="/login/">Login</nuxt-link>
<button @click="popup">Popup</button>
<div id="mymodal" class="is-hidden">...</div>
-->
    <Header></Header>

    <div class="is-wrapper">
      <div class="is-page is-container is-container-large is-stack-40">
        <div class="is-sidebar is-hidden-mobile">
          left sidebar
        </div>
        <div class="is-content">
          content
          <div class="is-row">
            <carousel :perPage=1 :perPageCustom="[[1024, 1]]">
              <slide>
                Slide 1 Content
              </slide>
              <slide>
                Slide 2 Content
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
  import { Header, Footer, Carousel, Slide } from '@/components'

  export default {

    components: { Header, Footer, Carousel, Slide },

    methods: {
      popup() {
        $K.app.modal.open({
          target: '#mymodal',
          title: 'My Modal'
        })
      }
    }
  }
</script>
