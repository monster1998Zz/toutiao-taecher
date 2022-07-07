import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Video = () => import('@/views/Video')
const Question = () => import('@/views/Question')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const Search = () => import('@/views/Search')
const Article = () => import('@/views/Article') // 懒加载写法
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'video', component: Video },
      { path: 'question', component: Question },
      { path: 'my', component: My, name: 'my' }
    ]

  },
  {
    path: '/login', component: Login
  },
  {
    path: '/search', component: Search
  },
  {
    path: '/article/:article_id', component: Article, name: 'article', props: true
  } // params相关的路由加prop:true可以让路由和组件解耦
]

const router = new VueRouter({
  routes
})

export default router
