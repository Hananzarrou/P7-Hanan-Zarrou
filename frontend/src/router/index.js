import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/myprofile',
    name: 'Myprofile',
    component: () => import('../views/Myprofile.vue')
  },
  {
    path: '/allpost',
    name: 'allpost',
    component: () => import('../views/AllPost.vue')
  }, 
  
  {
    path: '/addpost',
    name: 'AddPost',
    component: () => import('../views/AddPost.vue')
  }, 
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/Post.vue')
  }, 
  {
    path: '/confidential',
    name: 'Confidential',
    component: () => import('../views/Confidential.vue')
},
{
    path: '/reglement',
    name: 'Reglement',
    component: () => import('../views/Reglement.vue')
},
{
    path: '/unsubscribe',
    name: 'Unsubscribe',
    component: () => import('../views/Unsubscribe.vue')
},
{
    path: "/forum",
    name: "Forum",
    component: () => import('../views/Forum.vue')
},
{
    path: "/forum-texte",
    name: "ForumTexte",
    component: () => import('../views/ForumTexte.vue')
},
{
    path: '/forum-multimedia',
    name: 'ForumMultimedia',
    component: () => import('../views/ForumMultimedia.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
