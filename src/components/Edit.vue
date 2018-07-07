<!-- Edit.vue -->
<template>
 <div class="prompt-font">
  <app-header></app-header>
  <div class="container mt-2" style="padding-bottom:60px;">
   <div class="col-12 mt-2"> 
    <h3 class="mt-6" style="color:#4EADDD;"> Edit </h3>
    <div class="editImg mt-2">
     <img :src="post.file">
    </div>
    <label class="mt-2" style="color:#4EADDD;"> Name </label>
    <b-form-input v-model="post.displayName"></b-form-input>

    <label class="mt-2" style="color:#4EADDD;">Price </label>
    <b-form-input  style="border:none; margin-bottom:-15px;" v-model="post.price"></b-form-input>
    <div class="form-group mt-2">
     <label style="color:#4EADDD;">description</label>
     <textarea class="form-control" rows="4" id="comment" v-model="post.description"></textarea>
    </div> 
    <b-button style="background-color:#4EADDD; border:none;"
    block
    @click="updatePost">
    update
    </b-button>
   </div>
  </div>
  <app-footer></app-footer>
 </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import { postRef } from '../firebaseConfig.js'
export default {
 components: {
  appHeader: Header,
  appFooter: Footer,
 },
 data() {
  return {
   post: {
    displayName: '',
    price:'',
    description:'',
    key:'',
   },
  }
 },
 methods:{
  updatePost: function() {
   let _this = this
   let update = {
    displayName: this.post.displayName,
    price: this.post.price,
    description: this.post.description,
   }
   postRef.child(this.post.key).update(update)
   this.$toaster.success('Information updated')
   _this.$router.push('/product')
  },
  previewImage: function(e) {
   let input = e.target
   if (input.files && input.files[0]){
    let reader = new FileReader()
    reader.onload = (e)=> {
     this.previewTempImage = e.target.result
    }
    reader.readAsDataURL(input.files[0])
   }
  },
 },
 created() {
  let _this = this
  postRef.child(this.$route.params.key).once("value")
  .then(function(snapshot){
   console.log(snapshot.val())
   console.log(snapshot.key)
   if(snapshot.val()==null) {
    _this.$router.push({ name:'/product'})
   }
   _this.post.displayName = snapshot.child('displayName').val()
   _this.post.description = snapshot.child('description').val() 
   _this.post.price = snapshot.child('price').val()
   _this.post.file = snapshot.child('file').val()
   _this.post.key = snapshot.key
  })
 }
}
</script>