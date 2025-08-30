import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import FoodPage from '../pages/FoodPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/food',
    name: 'Food',
    component: FoodPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router