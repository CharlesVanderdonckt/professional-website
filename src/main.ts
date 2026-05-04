import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

// Lazy load components
const Home = () => import('./pages/Home.vue')
const Blog = () => import('./pages/Blog.vue')
const BlogPost = () => import('./pages/BlogPost.vue')
const Portfolio = () => import('./pages/Portfolio.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', component: BlogPost },
  { path: '/portfolio', component: Portfolio },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#root')
