<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

function doLogout() {
  store.commit('logout')
  router.push("/login")
}

</script>

<template>
  <div class="home">
    <h1>Home Page</h1>
    <button class="btn-logout" @click.prevent="doLogout">LOGOUT</button>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
}
.btn-logout {
  padding: 1.3rem 1rem;
  background-color: #3b57c7;
  border: none;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  order: 2;
}
@media (max-width: 900px){
  body {
    background:none;
  }
}
</style>
