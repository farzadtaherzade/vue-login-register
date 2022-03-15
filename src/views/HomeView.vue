<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
const store = useStore()
const router = useRouter()

</script>

<template>
  <div class="home">
    <Navbar />
  </div>
</template>

<style scoped>

</style>
