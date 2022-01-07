import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Loginpage.vue'
import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'
import Register from '../pages/Registerpage.vue'
Vue.use(VueRouter)
const routes = [
   { 
    path: '/', 
   

    },
    { path: '/loginuser', 
    component: Login,
    name:'login',

    },

    { path: '/registeruser', 
    component: Register,
    name:'register',

    },
    { path: '/dashboard', 
    component: Dashboard,
    name:'dashboard',

    },
    //{ path: '/bar', component: Bar }
  ]

  const router = new VueRouter({
   mode: 'history',
    routes // short for `routes: routes`
  })
  
  export default router