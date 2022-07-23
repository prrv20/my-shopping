import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories:[]
  },
  getters: {
  },
  mutations: {
    SET_CATEGORIES(state, categories){
      state.categories = categories
    }
  },
  actions: {
    async fetchCategories({commit}){
      try {
        let response = await fetch('/categories.json')
        console.log(response)
        if(!response.ok) throw("Error en Api")

        let categories = await response.json()
        console.log(categories)
        commit('SET_CATEGORIES', categories)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
