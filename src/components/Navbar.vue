<script setup>
import { useStore } from 'vuex'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const store = useStore()

function doLogout() {
  store.commit('logout')
  router.push("/login")
}
</script>
<template>
  <div class="navbar">
    <div class="left-content">
      <RouterLink RouterLink :to="{ name: 'home' }" class="link">Home Page</RouterLink>
      <span v-if="$store.state.isAuthenticated"> | </span>
      <RouterLink
        :to="{ name: 'about' }"
        class="link"
        v-if="$store.state.isAuthenticated"
      >About Page</RouterLink>
    </div>

    <button class="btn-logout" @click.prevent="doLogout" v-if="$store.state.isAuthenticated">LOGOUT</button>
    <RouterLink
      :to="{ name: 'about' }"
      class="link login"
      v-if="!$store.state.isAuthenticated"
    >Login / Register</RouterLink>
  </div>
</template>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 3rem;
}
.btn-logout {
  padding: 1.3rem 1.2rem;
  background-color: #3b57c7;
  border: none;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  order: 2;
  transition: 0.2s;
}
.btn-logout:hover{
  background-color:#3653c7dc;
}
.link {
  text-decoration: none;
  color: #181818;
  transition: 0.2s;
}
.link.login {
  text-decoration: none;
}
.link:not(.router-link-active):hover {
  text-decoration: underline;
  color: #42ae5a;
}
.router-link-active {
  color: #42ae5a;
  cursor: default;
  transition: 0.2s;
}
</style>