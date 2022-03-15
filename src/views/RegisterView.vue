<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, reactive } from 'vue';
import axios from 'axios'

const router = useRouter()

const state = reactive({
  username: '',
  email: '',
  password: ''
})

function doRegister() {


  fetch('https://api.freerealapi.com/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: state.username,
      email: state.email,
      password: state.password,
    })
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.status == 201) {
        router.push("/login")
      }
    })


}

</script>

<template>
  <div class="login-wrapper">
    <div class="left">
      <img src="../assets/te.jpg" alt="image" />
    </div>
    <div class="right">
      <form class="login" @submit.prevent="doRegister">
        <div class="register-login">
          <p>
            Already have an account?
            <RouterLink :to="{ name: 'login' }" class="link">Login</RouterLink>
          </p>
          <h2>Create Your FireBlog Account</h2>
        </div>
        <div class="inputs">
          <div class="input">
            <input type="gmail" placeholder="Email" v-model="state.email" />
            <img src="../assets/email.png" class="icon" alt="email" />
          </div>
          <div class="input">
            <input type="text" placeholder="Username" v-model="state.username" />
            <img src="../assets/user.png" class="icon" alt="email" />
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="state.password" />
            <img src="../assets/password.png" class="icon" alt="email" />
          </div>
        </div>
        <div class="forgot-login">
          <button class="btn-login">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.forgot-login {
  justify-content: flex-end;
}
h2 { 
  max-width: 360px;
}
</style>