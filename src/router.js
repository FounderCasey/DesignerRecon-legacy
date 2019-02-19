import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Welcome from './views/Welcome.vue'
import JoinUs from './views/JoinUs.vue'
import Thanks from './views/Thanks.vue'
import Confirmation from './views/Confirmation.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/welcome'
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation
    },
    {
      path: '/join',
      name: 'JoinUs',
      component: JoinUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('dashboard');
  else next();
});

export default router;