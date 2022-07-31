import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories:[],
    cart:[]
  },
  getters: {
    //Metodo que retorna la cantidad de Productos en el Carrito
     cartCount(state){
      return state.cart.length
     },
     //Metodo que multiplica el Subtotal
     cartProducts(state){
      return state.cart.map(prod =>{
        let myProd = prod
        myProd.total = prod.count * prod.price // se le agrega la propiedad total al Objeto
        return myProd
      })
     },
     //Metodo para calculare l total a pagar
     cartTotal(state, getters){
      return getters.cartProducts.reduce((total, prod) => {
        return total + prod.total
      },0)
     }

  },
  mutations: {
    SET_CATEGORIES(state, categories){
      state.categories = categories
    },
    ADD_TO_CART(state, product){
      let exist = state.cart.some((prod)=> prod.id == product.id)
      if(!exist){
        state.cart.push(product)
      } else state.cart.forEach(p => {
        if(p.id == product.id){
          p.count += 1
        }
      })
      }
  },
  actions: {
    async fetchCategories({commit}){
      try {
        let response = await fetch('https://fakestoreapi.com/products/categories')
        //let response = await fetch('/categories.json')
        console.log(response)
        if(!response.ok) throw("Error en Api")

        let categories = await response.json()
        console.log(categories)
        commit('SET_CATEGORIES', categories)
      } catch (error) {
        console.log(error)
      }
    },
    addToCart({ commit}, product){
      commit('ADD_TO_CART', product)
    }
  },
  modules: {
  }
})
