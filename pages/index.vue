<template>
    <div>
        <div class="navigation is-global is-wrapper">
            <!--
            <nuxt-link to="/login/">Login</nuxt-link>
            <button @click="popup">Popup</button>
            <div id="mymodal" class="is-hidden">...</div>
            -->
            <div class="is-navbar-container is-container-large is-stack-20">
                <div class="is-brand">
                    <b class="is-logo">S.Site</b>
                    <a href="#" class="nav-toggle is-push-right-mobile is-shown-mobile icon-kube-menu"
                       data-kube="toggle"
                       title="Menu" data-target="#navbar" data-loaded="true"></a>
                </div>
                <div id="navbar" class="is-navbar is-hidden-mobile">
                    <nav>
                        <ul>
                            <li>
                                <nuxt-link to="/page-1/">Page 1</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/page-2/">Page 2</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/page-3/">Page 3</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/page-4/">Page 4</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/page-5/">Page 5</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                    <nav class="is-push-right">
                        <ul>
                            <li>
                                <nuxt-link to="/console/">Console</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

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
