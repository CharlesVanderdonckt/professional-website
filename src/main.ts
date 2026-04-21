import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

// Lazy load components
const Home = () => import('./pages/Home.vue')
const Blog = () => import('./pages/Blog.vue')
const Portfolio = () => import('./pages/Portfolio.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/portfolio', component: Portfolio },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#root')
