<template>
 <div>
  <app-header></app-header>
  <center>
   <h1 style="font-weight: bold;">CART</h1>
 </center>
 <template>
   <div>
    <div class="container">
     <div class="row">
      <div class="col-sm-6">
         <!--<table class="table table-striped mt-3">-->
          <!--<thead>-->
           <!--<tr>-->
            <!--<th>Product</th>-->
            <!--<th width="150">Price</th>-->
          <!--</tr>-->
        <!--</thead>-->
        <!--<tbody style="width:100%;height:auto;">-->
         <!--<tr v-for="cart in carts">-->
          <!--<div class="card" style="width:10rem;">-->
           <!--<img :src="cart.da" style="width:100%;height:auto;" />-->
         <!--</div>-->
         <!--<div class="card" style="width:10rem;">-->
           <!--<img :src="feed.picture" style="width:100%;heigh:auto;">-->
         <!--</div>-->
         <!--<td> {{ cart.a }}</td>-->
         <!--<td> {{ cart.b }}</td>-->
         <!--<td> {{ cart.c }}</td>-->
         <!--<td>-->
           <!--<button class="btn btn-danger"-->
           <!--@click="removeStudent(feed['.key'])">-->
           <!--del-->
         <!--</button>-->
       <!--</td>-->
     <!--</tr>-->
   <!--</tbody>-->

 <!--</table>-->

         <table class="table">
          <!--<thead>-->
          <!--<tr>-->
           <!--<th scope="col">#</th>-->
           <!--<th scope="col">displayName</th>-->
           <!--<th scope="col">image</th>-->
           <!--<th scope="col">Handle</th>-->
          <!--</tr>-->
          <!--</thead>-->
          <tbody>
            
          <div
                  v-for="cart in myCart"
                  :key="cart['.key']">
           <div
                   v-for="(product,index) in products"
                   v-if="cart.productID==product['.key']">

                   <tr>
                      <th> No. </th>
                      <th>Product</th>
                      <th> Description</th>
                      <th> Price</th>
                    </tr>

            <tr>
             <th scope="row"> {{index+1}}</th>
             <td>{{product.displayName}}</td>
             <td>{{product.description}}</td>
             <td>{{product.price}}</td>

             <td>
              <img :src="product.file" center blank-color="#bbb" alt="img"  width="200"/>
             </td>

             <td>
              <button class="btn btn-danger" @click="CheckOut(product['.key'])"> delete </button>
             </td>
            </tr>
            
            <br>

           </div>
          </div>


          </tbody>
         </table>
         <button class="btn btn-success">
           <a href="/Product" style="text-decoration: none; color: #fff;">
            back 
            </a>
         </button>

</div>
</div>
</div>
</div>
<!-- end row -->
</template>
<!--<app-footer></app-footer>-->
</div>
</template>
<script>

import Header from './Header.vue'
import { cartRef,postRef,dbAuth } from '../firebaseConfig.js'

export default {
 components: {
  appHeader: Header
},
firebase:{
  products : postRef,
},
data(){
  return {
   photoUrl:null,
      currentUser:null,
      myCart:'',
      key:''
 }
},
methods: {
  CheckOut: function(key){
        // console.log(key)
      cartRef.child(this.currentUser.uid).child(key).remove()
        this.$toaster.success('Delete!')
        this.$router.go()      }
    },
    created(){
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