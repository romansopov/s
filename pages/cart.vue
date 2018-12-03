<template>
  <div>
    <Header></Header>

    <div class="is-wrapper">
      <div class="is-page is-container is-container-large is-stack-40">
        <div class="is-sidebar is-hidden-mobile">
          left sidebar
        </div>
        <div class="is-content">
          content
        </div>
      </div>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'

  export default {
    components: { Header, Footer }
  }
</script>
