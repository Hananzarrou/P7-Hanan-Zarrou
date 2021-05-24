import Vue from "vue";
import VueRouter from "vue-router";
import Acceuil from "../views/Acceuil.vue";
import Login from "../views/Login.vue";
import Post from "../views/Post.vue";
import ModifProfil from "../views/ModifProfil.vue";
import Data from "../components/Seconnecter.vue";
import Profil from "../views/Profil.vue";
import ProfilChoice from "../views/ProfilChoice.vue";
// import views

Vue.use(VueRouter);

//const userChoice = localStorage.getItem("userChoice");

// routes
const routes = [
  {
    path: "/",
    name: "Acceuil",
    component: Acceuil,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: `/profil/:userChoice`, //${userProfil}
    name: "ProfilUser",
    component: ProfilChoice,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/upProfil",
    name: "UpProfil",
    component: ModifProfil,
    meta: {
      requiresAuth: true,
    },
  },
];

// router
const router = new VueRouter({
  mode: "history",
  routes,
});

// navigation guard

router.beforeEach((to, from, next) => {
  if (to.matched.some((routes) => routes.meta.requiresAuth)) {
    if (!Data.data.token) {
      next({
        name: "Login" || "Acceuil",
      });
    } else {
      next();
    }
  } else if (to.matched.some((routes) => routes.meta.requiresVisitor)) {
    if ((Data.data.token = localStorage.getItem("acces_token"))) {
      next({
        name: "Post" || "UpProfil" || "ProfilUser" || "Profil",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;