import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tag from '@/components/Tag'
import Login from '@/components/Login'
import AuthSuccess from '@/components/AuthSuccess'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/success',
      component: AuthSuccess,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')
  else next()
})

export default router
