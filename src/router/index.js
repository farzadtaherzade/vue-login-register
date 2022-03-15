import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import store from '../stores/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { loginRedirect: true },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: { loginRedirect: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if(store.state.isAuthenticated) {
      next();
    }else {
      next('/login');
    }
  }else if(to.meta.loginRedirect){
    if(!store.state.isAuthenticated) {
      next();
    }else {
      next('/');
    }
  }else {
    next()
  }
});

export default router;
