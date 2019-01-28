import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters.js'
import router from './router'
import axios from 'axios'
import store from './store/store.js'


Object.keys(Filters).forEach( (f) => { // nous itérons sur toutes les fonctions de filtre disponibles et
  Vue.filter(f,Filters[f]) // nous les enregistrons de manière globale avec Vue.filter.
}) // Pour rappel, Vue.filter prend deux paramètres : Vue.filter( id, [définition] )
// Nous lui passons pour chaque filtre f comme id qui est le nom de notre fonction,
// ici par exemple price, et en deuxième paramètre la fonction correspondante en entier.

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
