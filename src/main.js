import Vue from 'vue'
import App from './App.vue'

import VueRouter from'vue-router'
import { routes } from './routes.js'
import BootstrapVue from 'bootstrap-vue'
import Toaster from 'v-toaster'
import VueFire from 'vuefire'


//font awersome

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands,solid)
Vue.component('font-awesome-icon',FontAwesomeIcon)


//css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'v-toaster/dist/v-toaster.css'
import './assets/css/style.css'

// import './js/app.js'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Toaster,{timeout:6000000000})
Vue.use(VueFire)



const router = new VueRouter({
	mode:'history',
	routes 
})
import {dbAuth} from './firebaseConfig.js'
router.beforeEach((to, from, next)=>{
	let currentUser = dbAuth.currentUser
	let requireAuth = to.matched.some(record=>record.meta.requireAuth)
	if (requireAuth && !requireAuth) {
		next('/login')
	}else if (!requireAuth && currentUser) {
		next('/')
	}
	else{
		next()
	}
})

let app
dbAuth.onAuthStateChanged(function(user) {
	
	if(!app){

		new Vue({
		  el: '#app',
		  router,
		  render: h => h(App)
		})
	}
})
