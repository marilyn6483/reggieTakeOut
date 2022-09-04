import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Home1 from '@/components/Home1'
import Login from '@/components/Login'
import Employee from '@/components/Employee'
import Category from '@/components/Category'

Vue.use(Router)

const routerList = [
  {
    path: '/home',
    name: 'Home',
    component: Home1,
    children: [
      {
        path: '/employee',
        name: 'Employee',
        component: Employee
      },
      {
        path: '/category',
        name: 'Category',
        component: Category
      }

    ]
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },


]

const router = new Router({
  routes: routerList
})

export default router

// 默认代码
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
