<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex'
import { onMounted } from 'vue';

const store = useStore()
onMounted(() => {
  store.commit("onStart")
})

</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

.login-wrapper,
.register-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.container {
  margin-left: 5rem;
  margin-right: 5rem;
}
</style>