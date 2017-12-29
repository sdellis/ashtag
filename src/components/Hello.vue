<template lang="html">
  <div class="hello">
    <img src="../assets/ashtag-logo.png" alt="Ash Tag">
    <h1>Ash trees are in danger!</h1>
    <p>Can you help us find them all so we can stop the spread of a
       deadly beetle infestation?</p>
    <p>Welcome, {{name}}!</p>
    <div class="actions">
      <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" to="/tag">
        Tag an ash tree
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {}
    }
  },
  beforeMount: function () {
    if (this.$store.state.user) {
      this.user = this.$store.state.user
      this.name = this.$store.state.user.displayName
      this.email = this.$store.state.user.email
      this.photo = this.$store.state.user.photoURL
      this.userId = this.$store.state.user.uid
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  font-weight: normal;
}

h1 {
  font-size: 30px;
}

p {
  padding: 0 30px;
}

a {
  color: #35495E;
}

.actions {
  text-align: center;
}
</style>
