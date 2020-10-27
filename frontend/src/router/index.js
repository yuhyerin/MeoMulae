import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../pages/Login.vue'
import Survey from '../pages/Survey.vue'
import Stepper from '../pages/Stepper.vue'
import Step from '../pages/Step.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  },
  {
    path: '/stepper',
    name: 'Stepper',
    component: Stepper
  },
  {
    path: '/step',
    name: 'Step',
    component: Step
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
