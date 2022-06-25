import { createRouter, createWebHistory } from 'vue-router'

function validid(to) {
  if (localStorage.id != '5f8475902b0be670555f1bb3')
    return {path:'/Authorization'}
}


const routes = [
  {
    path: '/',
    redirect: to => {
      return {path:'/Authorization'}
    },
    name: 'home',
  },
  {
    path: '/Authorization',
    name: 'Authorization',
    component: () => import('../views/Authorization.vue'),
    meta:{
      title: "LeadHit"
    }
  },
  {
    path: '/Analytics',
    name: 'Analytics',
    beforeEnter: [validid],
    component: () => import('../views/Analytics.vue'),
    meta:{
      title: "Аналитика"
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
