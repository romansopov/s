'use strict'

import _ from 'lodash'
import axios from 'axios'

export const state = () => ({
  shop: {
    count: 0
  }
})

export const actions = {
  nuxtServerInit({commit}, {req}) {
    console.log('nuxtServerInit', req.session)

    commit('setShopCount', _.get(req.session, 'shop.count', 0))
  },

  async addProductToCart ({ commit }, data) {
    try {
      const { data } = await axios.post('/api/shop/addProductToCart/', data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  },
}

export const mutations = {
  increment: (state) => {
    state.shop.count++
  },

  setShopCount: (state, count) => {
    state.shop.count = count
  }

}


/*
export const state = () => ({
  authUser: null,
  sessionId: null,
  shop: {
    count: 0,
    products: []
  }
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
*/
