<template>
  <div class="navigation is-global is-wrapper">
    <div class="is-navbar-container is-container-large is-stack-20">
      <div class="is-brand">
        <b class="is-logo"><nuxt-link to="/">S.Site</nuxt-link></b>
        <a href="#" class="nav-toggle is-push-right-mobile is-shown-mobile icon-kube-menu"
           data-kube="toggle"
           title="Menu" data-target="#navbar-mobile" data-loaded="true"></a>
      </div>
      <div class="is-navbar is-hidden-mobile">
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
              <nuxt-link to="/cart/">Cart <span class="label is-badge">5</span></nuxt-link>
            </li>
            <li>
              <nuxt-link to="/console/">Console</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="navbar-mobile" class="is-navbar is-hidden">
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
            <li>
              <nuxt-link to="/cart/">Cart</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/console/">Console</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>
