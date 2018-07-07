<!-- Login.vue -->

<template>
	<div id="app">
		<div class="container has-text-centered">
	<div class="text-center">
		<div class="column is-4 is-offset-4">
			<h4 class="p-0 m-0">Chouchou</h4>
			<p class="p-0"> log-in for shipping world-wide</p>
			 <figure class="avatar">
			  <b-img rounded="circle" blank width="75" height="75" blank-color="#777" alt="img" class="m-1" />
            </figure>
			<input type="text" class="form-control" placeholder="Email" v-model="email">
			<br>
			<input type="password" class="form-control" placeholder="Password" v-model="password">
			<br>
			<div class="field">
                <label class="checkbox">
                  <input type="radio">
                  Remember me
                </label>
              </div>
			<button @click="signIn()" class="btn btn-lg btn-primary btn-block" style="background-color: #55a371ff; text-decoration: none;">
				<a href="/" style="text-decoration: none; color: #fff;"> Log-In  </a>
			</button>
			<p class="has-text-grey">
            <a href="/Register"> Register </a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
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
			}
		},
		methods: {
			signIn: function(){
				let _this = this
				dbAuth.signInWithEmailAndPassword(this.email,this.password)
				.then(
					function(user) {
						_this.$router.replace('/Product')
					},
					function(err) {
						_this.$toaster.error(err.message)
					}
				)
			}
		}
	}
</script>