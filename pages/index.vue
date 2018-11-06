<template>
  <div>
    <nuxt-link to="/login/">Login</nuxt-link>
    <button @click="popup">Popup</button>
    <div id="mymodal" class="is-hidden">...</div>
  </div>
</template>

<script>
  export default {
    beforeMount() {
      // $K.init()
      $K.init();
      (function ($K) {
        console.log($K)
        $K.add('module', 'mymodule', {
          init: function(app, context) {
            console.log(this)
            this.app = app;
            // define service
            this.modal = app.modal;
          },
          showModal: function() {
            console.log(this)
            this.modal.open({
              target: '#mymodal',
              title: 'My Modal'
            });
          }
        });
      })(Kube);
    },
    methods: {
      popup () {
        $K.app.modal.open({
          target: '#mymodal',
          title: 'My Modal'
        });
      }
    }
  }
</script>
