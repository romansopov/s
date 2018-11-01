'use strict'

import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {

  SET_USER: function (state, user) {
    state.authUser = user
  },

  SET_SESSION_ID: (state, id) => {
    state.sessionId = id
  }
}

export const actions = {

  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    console.log('nuxtServerInit', req.session)
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
    commit('SET_SESSION_ID', req.sessionID)
  },

  async login ({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/login', { username, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}
