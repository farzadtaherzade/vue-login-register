import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    isAuthenticated: false,
    token: "",
  },
  mutations: {
    onStart(state) {
      let token = localStorage.getItem("token");
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
      } else {
        state.isAuthenticated = false;
        state.token = null;
      }
    },
    login(state , token) {
      if (token) {
        state.isAuthenticated = true;
        state.token = token;
        localStorage.setItem("token", token);
      } else {
        state.isAuthenticated = false;
        state.token = null;
        localStorage.removeItem("token");
      }
    },
    logout(state){ 
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token");
    }
  },
});
