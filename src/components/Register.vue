<!-- Register.vue -->

<template>
	<div id="app">
		<div class="container has-text-centered">
	<div class="text-center">
		<div class="column is-4 is-offset-4">
			<h1 class="p-0 m-0" style="font-size: 36px;"> chouchou </h1>
			<p> Register </p>
			 <figure class="avatar">
              <img src="https://placehold.it/128x128">
            </figure>
			<input type="text" class="form-control" placeholder="Email" v-model="email">
			<br>
			<input type="password" class="form-control" placeholder="Password" v-model="password">
			<br>
			<input type="text" class="form-control" placeholder="Your Name" v-model="displayName">
			<br>
			<div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div>
			<button @click="signUp()" class="btn btn-lg btn-primary btn-block" style="background-color: #55a371ff; text-decoration: none;">
				<a href="/Product" style="text-decoration: none; color: #fff;"> Register  </a>
			</button>
			<p class="has-text-grey">
            <a href="/login">Log in</a> &nbsp;·&nbsp;
            <a href="../">Need Help</a>
          </p>
		</div>
		
	</div>
	</div>
	</div>
</template>

<script type="text/javascript">
	import	{ dbAuth } from '../firebaseConfig.js'
	export default {
		data(){
			return {
				email:'',
				password:'',
				displayName:''
			}
		},
		methods:{
			signUp: function() {
				let _this = this
				dbAuth.createUserWithEmailAndPassword(this.email,this.password)
				.then(
					function(user){
						// console.log(user)
						user.updateProfile({
							displayName: _this.displayName
						})
						.then
							(function(){
								_then.$router.replace('/Product')
							},
							function(err){
								_this.$toaster.error(err.message)
							}
						)
					},
					function(err){
						_this.$toaster.error(err.message)
					}
				)
			}
		}
	}
</script>