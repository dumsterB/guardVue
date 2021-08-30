import Vue from "vue";
import Vuex from "vuex";
import auth from "../router/auth.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: {
      Ziko: {
        name: "Ziko",
        passphrase: "123",
        role: 1
      },

      Behruz: {
        name: "Behruz",
        passphrase: "1",
        role: 2
      },

      guest: {
        name: "guest",
        passphrase: "2",
        role: 3
      }
    },
    user:[],
    links: [
      { title: "login", beforeEnter: auth, path: "/login" },
        { title: "main", beforeEnter: auth, path: "/main" },
      { title: "home", beforeEnter: auth, path: "/home" },
      { title: "todo", beforeEnter: auth, path: "/todo" },
      { title: "banlist", beforeEnter: auth, path: "/banlist" }
    ],
    profile: {
      auth: false,
      name: "Abadon",
      access_level: -1
    }
  },
  mutations: {
    setState(state, payload) {
      Object.keys(payload).forEach(key => {
        if (key in state) {
          state[key] = payload[key];
        }
      });
    },
    addUser(state,payload){
      const newTask={
        username:payload.username,
        passphrase:payload.passphrase
      }
      state.user.push(newTask)
    }
  },
  actions: {
    SET_AUTH({ state, commit }, authState) {
      commit("setState", {
        profile: {
          ...state.profile,
          auth: authState
        }
      });
    },
    addToBasket:(contex,payload)=>{
         contex.commit("ADD_BASKET",payload)
       },
    LOGIN_COMPARE({ state, commit}, { username, passphrase }) {
      const userProps = state.users[username];
      const authDone=
        userProps.name == username && userProps.passphrase == passphrase;

    commit("addUser",commit)
      if (authDone) {
        commit("setState", {
          profile: {
            ...state.profile,
            auth: true,
            access_level: userProps.role
          }
        });
      }

    }},
  getters: {}
});

export default store;
