<template lang="html">
  <div class="hello">
    <img src="../assets/ashtag-logo.png" alt="Ash Tag">
    <h1>Ash trees are in danger!</h1>
    <p>Can you help us find them all so we can stop the spread of a
       deadly beetle infestation?</p>
    <p>Please login using one of your existing online identities to get started:</p>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
export default {
  name: 'auth',
  mounted () {
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
