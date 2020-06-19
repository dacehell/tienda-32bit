import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
     products: [
          {code: '01', name: 'Keiro', stock:'100', price:'30000', color: 'red', featured: true},
          {code: '02', name: 'Fifa 21', stock:'100', price:'25000', color: 'blue', featured: false},
          {code: '03', name: 'Gears of war 4', stock:'100', price:'15000', color: 'green', featured: true},
          {code: '04', name: 'Mario Tennis', stock:'100', price:'35000', color:'yellow', featured: false},
          {code: '05', name: 'Bloodborne', stock:'100', price:'10000', color: 'blue', featured: false},
          {code: '06', name: 'Forza H', stock:'100', price:'20000', color: 'red', featured: true},
    ],
      title: '32bits',
      subTitle: 'Juegos de PC y consolas'
    },
  getters: {
           countAvailable(state){
               return state.products.length
        },
            sumTotal(state){
              return state.products.reduce((acc, prod) => acc += parseInt(prod.stock),0)
        },
        
        byId: (state) => (code) => {
          return state.products.find(product => product.code == code)
        },
        
        stockGame (state) {
          return state.products.filter((product) => {
           return product.stock > 0
          })
        },
      },
  
  mutations: {},
  actions: {}
});

export default store;
