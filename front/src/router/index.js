import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../view/login'
import Signup from '../view/signup'
import IndexHome from '../view/index'
import Blog from '../view/blog'
import MessageBoard from '../view/messageBoard'
import About from '../view/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      name: 'Helloworld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/index/blog',
      component: IndexHome,
      children: [
        {
          path: 'blog',
          name: 'blog',
          component: Blog
        },
        {
          path: 'messageBoard',
          name: 'messageBoard',
          component: MessageBoard
        },
        {
          path: 'about',
          name: 'about',
          component: About
        }
      ]
    }
  ]
})
