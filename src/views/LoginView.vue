<script setup>
import { ref, reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useToast } from "vue-toastification";

const toast = useToast();
const store = useStore()
const router = useRouter()

const state = reactive({
  email: '',
  password: ''
})

function doLogin() {
  fetch('https://api.freerealapi.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: state.email,
      password: state.password,
    })
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      if (json.status == 200) {
        toast.success("Your login was success", {
          timeout: 1800
        });
        store.commit('login', json.token)
        router.push("/")
      }
    })

}

</script>

<template>
  <div class="login-wrapper">
    <div class="left">
      <img src="../assets/te.jpg" alt="dasdas" />
    </div>
    <div class="right">
      <form class="login" @submit.prevent="doLogin">
        <div class="register-login">
          <p>
            Don't have an account?
            <RouterLink :to="{ name: 'register' }" class="link">Register</RouterLink>
          </p>
          <h2>Login to your account</h2>
        </div>
        <div class="inputs">
          <div class="input">
            <input type="gmail" placeholder="Email" v-model="state.email" />
            <img src="../assets/user.png" class="icon" alt="email" />
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="state.password" />
            <img src="../assets/password.png" class="icon" alt="email" />
          </div>
        </div>
        <div class="forgot-login">
          <p>Fortgot Password?</p>
          <button class="btn-login">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.right,
.left {
  position: relative;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.inputs {
  width: 360px;
}
.register-login h2 {
  font-size: 32px;
  text-align: center;
  color: #303030;
  margin-bottom: 40px;
}
input {
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid rgb(157 150 150 / 41%);
  outline: none;
  padding: 4px 4px 4px 54px;
  height: 50px;
}
input:not(:last-child) {
  margin-bottom: 1rem;
}
input::placeholder {
  color: rgba(0, 0, 0, 0.5);
}
.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
img {
  width: 100%;
  height: 100%;
}
.register-login p {
  text-align: center;
  margin-bottom: 0.9rem;
  color: #303030;
}
.register-login p .link {
  color: #303030;
}
.btn-login {
  padding: 1.3rem 1.5rem;
  background-color: #3b57c7;
  border: none;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  order: 2;
}
.forgot-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.forgot-login p {
  color: #9d9d9d;
  cursor: pointer;
}
.icon {
  position: absolute;
  top: 14px;
  left: 17px;
  width: 21px;
  height: auto;
}
.input:last-child .icon {
  transform: rotate(90deg);
}
.login-register {
  position: absolute;
  top: 400px;
}

@media (max-width: 900px) {
  .left {
    display: none;
  }
  .right,
  .left {
    flex-basis: 100%;
  }
  body {
    background: url("../assets/image.jpg");
    /* background-repeat: no-repeat; */
  }
}
</style>
