import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  properties: [],
  property: {},
  user: {}
}

let handleError = (state, err) => {
  state.error = err
}

export default new Vuex.Store({
  // ALL DATA LIVES IN THE STATE
  state,
  //Mutations are the only thing alowed to update the store directly through store.propName

  mutations: {
    setProperties(state, properties) {
      state.properties = properties
    },
    setProperty(state, property) {
      state.property = property
    },
    setLogin(state, user) {
      state.user = user
    },
    setRegister(state, user) {
      state.user = user
    },
    setAuth(state, Auth){
      state.Auth = Auth
    }
  },

  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  // Dispatch fires actions, commit fires mutations
  actions: {
    getProperties({commit, dispatch}) {
      api('properties')
        .then(res => {
          commit('setProperties', res.data.data)
        })
        .catch(handleError)
    },

    getProperty({commit, dispatch}, id) {

      api('properties/' + id)
        .then(res => {
          commit('setProperty', res.data.data)
        })
        .catch(handleError)
    },

    createProperty({commit, dispatch}, property) {
      api.post('properties/', property)
        .then(res => {
          dispatch('getProperties')
        })
        .catch(handleError)
    },

    removeProperty({commit, dispatch }, board) {
      api.delete('properties/' + property._id)
        .then(res => {
          dispatch('getProperties')
        })
        .catch(handleError)
    },    

    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res => {
          console.log(res)
          commit('setLogin', res.data.data)
          router.push('/Home')
        })
        .catch(handleError)
    },

    register({commit, dispatch}, user) {
      auth.post('register', user)
        .then(res => {
          console.log(res)
          if (res.data.error) {
            return handleError(res.data.error)
          }
          //LETS REDIRECT THE PAGE
          commit('setRegister', res.data.data)
          router.push('/Home')
        })
        .catch(handleError)
    },
    getAuth({commit, dispatch}) {
      auth('authenticate')
        .then(res => {
          commit('setAuth',  res.data.data)
          router.push('/Home')  
        }).catch(err => {
          router.push('/login')
        })
    },


    clearError({commit, dispatch}) {
      state.error = {}
    }
  }
})