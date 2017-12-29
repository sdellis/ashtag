<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <!-- <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Ashtag</span>
      </div>
    </header> -->
    <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <nav v-if="user" class="mdl-navigation">
        <a class="mdl-navigation__link" href="javascript: history.go(-1)">&lt;</a>
      </nav>
      <!-- Title -->
      <span class="mdl-layout-title">Ashtag</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav v-if="user" class="mdl-navigation">
        <a class="mdl-navigation__link" href="" @click='logOut'>Logout</a>
      </nav>
    </div>
  </header>
    <!-- <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Ashtag</span>
      <nav class="mdl-navigation">
        <a href="/">Foo</a>
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/tag" @click.native="hideMenu">Tag an ash tree</router-link>
      </nav>
    </div> -->
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import 'material-design-lite'
import auth from './helpers/auth'
// import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'app',
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    },
    logOut () {
      auth.logout()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

body {
  margin: 0;
  background-color: #F5F4F1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header, .mdl-layout__header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #435058;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.alert {
  background-color: #E1C46E;
}

.success {
  background-color: #7FB087;
}

</style>
