<!-- Header.vue -->
<template>
	<div class="navbar-top fixed">
		<b-navbar toggleable="md" type="dark" style="background-image: linear-gradient(to left top, #d8e8b3, #bad69f, #9ac58d, #79b47e, #55a371);">
			<b-navbar-brand href="/Home" style="font-family: 'Barlow Condensed'; font-size: 28px; font-weight: bold; color:#045a37;"> chouchou </b-navbar-brand>
		  <b-navbar-toggle class="navbar-burger burger" target="nav_collapse" style="border: none;"></b-navbar-toggle>
		 <b-collapse is-nav id="nav_collapse">
		    <b-navbar-nav style="text-align: center; font-size: 18px;">
		      <b-nav-item href="/Home" > Home </b-nav-item>
		      <b-nav-item href="/Product" > Product </b-nav-item>
		      <b-nav-item href="/Challenge" > Challenge </b-nav-item>
					
					<b-nav-item v-if="currentUser"> 
						<template slot="button-content" v-if="currentUser.email!=null" >
							<em> {{ currentUser.email }} </em>
						</template>
					</b-nav-item>

					<b-nav-item v-else href="/login" > Log-in | Register </b-nav-item>
		    </b-navbar-nav>
		 </b-collapse>
	 </b-navbar>
</div>
</template>

<script>
import { postRef, dbAuth } from '../firebaseConfig.js'
export default {
	data() {
		return {
			currentUser: null
		}
	},
	created() {
		let _this = this
		dbAuth.onAuthStateChanged(function(user) {
			_this.currentUser = user
		})
	}
}
</script>






