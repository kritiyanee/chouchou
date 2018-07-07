import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Post from './components/Post.vue'
import Edit from './components/Edit.vue'
import Challenge from './components/Challenge.vue'
import Checkout from './components/Checkout.vue'
import Product from './components/Product.vue'
import View from './components/View.vue'
// import Item from './components/Item.vue'

export const routes = [

{
	path:'/login',component:Login,name:'login', meta: { requireAuth: true }
},
{
	path:'/register',component:Register,name:'register', meta: { requireAuth: true }
},
{
	path:'/',component:Home,name:'home', meta: { requireAuth: true }
},
{
	path:'/post',component:Post,name:'post', meta: { requireAuth: true }
},
{
	path:'/edit/:key',component:Edit, name:'edit', meta: { requireAuth: true }
},
{
	path:'/challenge',component:Challenge,name:'challenge',meta: { requireAuth: true }
},
{
	path:'/checkout',component:Checkout,name:'checkout',meta: { requireAuth: true }
},
// {
// 	path:'/item',component:Item,name:'item',meta: { requireAuth: true }
// },
{
	path:'/product',component:Product,name:'product',meta: { requireAuth: true }
},
{
	path:'/view/:key',component:View,name:'view',meta: { requireAuth: true }
},

]