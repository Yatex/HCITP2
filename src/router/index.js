import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rooms from '../views/Rooms.vue'
import Room from '../components/Room.vue'
import Devices from '../views/Devices.vue'
import Routines from '../views/Routines.vue'
import Routine from '../components/Routine.vue'
import Instructions from '../views/Instructions.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/routines',
    name: 'Routines',
    component: Routines
  },
  {
    path: '/devices',
    name: 'Devices',
    component: Devices
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/rooms/:id',
    name: 'Room',
    component: Room
  },
  {
    path: '/routines/:id',
    name: 'Routine',
    component: Routine
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
