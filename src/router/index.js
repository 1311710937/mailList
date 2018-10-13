import Vue from 'vue'
import Router from 'vue-router'

//懒加载
const app =() => import('../components/app')
const login =() => import('../components/login')
const register =() =>import('../components/register')
const  mailList =() => import('../components/mailList')
const  notes =() => import('../components/notes')
const  own =() => import('../components/own')
const addCon =() => import('../components/addCon')


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home/register'},
    {
      path: '/home',
      component: app,
      children:[
        {path:'login',component:login},
        {path:'register',component:register}
      ]
    },
    {

      path:'/contacts',
      component:mailList,
      children:[
        {
          path:'',
          component:notes,
         meta:{logined:true}
        },
        {path:'add',component:addCon},
        {path:'own',component:own},


      ]

    }
  ]
})
