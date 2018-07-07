<!-- Product.vue -->
<template>
	<div>
		<app-header></app-header>
		<div class="container">
			<div class="row">
				<div class="col-sm-2">	
					<div class="text-center" style="margin-top: 10px;">

						<a href="/checkout" style="color: #55a371ff; text-decoration: none; margin-left: 220px; font-size: 26px;" >
							<font-awesome-icon icon="shopping-basket"/>
							 </a>

							<a href="/Post" style="color: #55a371ff; text-decoration: none; margin-left: 5px; font-size: 26px;" >
								<font-awesome-icon icon="camera"/> </a>
							</div>

							<div class="d-flex justify-content-center pr-5">
								<div class="text-center">
									<h4 style="font-size: 40px; font-weight: bold;"> Product </h4>
									<p style="font-size: 18px;"> You deserve great fresh things in your life, <br>
									here's our product! </p>
								</div>
							</div>
							<label style="font-size: 16px;"> Choose type </label>

							<div style="width:100%;">
								<select class="form-control">
									<option> Vegetable </option>
									<option> Mixed vegetable </option>
									<option> Fruits </option>
									<option> Herbs </option>
									<option> Salads </option>
								</select>
							</div>
							<br>
						</div>
					</div> <!-- end row-1 -->

					<div class="row">
						<b-card class="col-sm12 col-md-6 col-lg-3" v-for="showitem in showitems">
							<b-img-lazy :src="showitem.file" center fluid-grow blank-color="#bbb" alt="img" class="card-img-top"/>
							<b-card-body>
								<h1 class="card-text">
									{{ showitem.displayName }}
								</h1>
							</b-card-body>
							<b-list-group flush>	
								<b-list-group-item>
									<p style="font-weight: bold;"> Price : </p>
									{{ showitem.price }} 
								</b-list-group-item>

								<b-list-group-item>
									<p style="font-weight: bold;"> Detail : </p>
									{{ showitem.description }}
								</b-list-group-item>
							</b-list-group>
							<b-card-body>
								<router-link style="text-decoration: none;" class="btn btn-danger" :to="{ name: 'edit', params: { key:showitem['.key'] } }">
									edit 
								</router-link>

								<button type="button" class="btn btn-success" @click="addToCart(showitem['.key'])"
									>Add To Cart</button>


								<!-- <router-link class="btn btn-primary" style="" :to="{ name:'view',params:{key:feed['.key']}}">
            						<font-awesome-icon size="1x" :icon="['fab','readme']"/> view
          						</router-link> -->
							</b-card-body>
						</b-card>
					</div> 
				</div> <!-- container-->
				<app-footer></app-footer>
			</div> <!-- app -->
		</template>
		<script>

		import Header from './Header.vue'
		import { postRef,cartRef,dbAuth } from '../firebaseConfig.js'
		export default {
			components: {
				appHeader: Header,
			},
			firebase: {
				showitems: postRef,
				myCart:cartRef
			},
			data(){
				return {
					headerText:'Feeds',
					post: {
						displayName:'',
						price:'',
						description:'',
						key:'',
					},
                    currentUser: null,
					myCart:''


                }
			},
			methods:{
			    addToCart:function (productID) {
					cartRef.child(this.currentUser.uid).child(productID).set({
						uid:this.currentUser.uid,
						productID:productID
					})
                    this.$toaster.success('add'+productID+'to cart success')

                }
			},
			computed:{

			},
            created() {
                let _this = this
                dbAuth.onAuthStateChanged(function(user) {
                    _this.currentUser = user

                    cartRef.child(user.uid).once("value")
                        .then(function (snapshot) {
                            console.log(snapshot.val())
                            if(snapshot.val() === null){
                                _this.$route.push({name:'home'})
                            }
                            _this.myCart = snapshot.val()
                            _this.key = snapshot.key
                        })

                })
            }

		}
		</script>