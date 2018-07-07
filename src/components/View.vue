<template>
 <div>
  <app-header></app-header>
  <!-- {{view.picture}} -->
  <div class="card" style="width:20rem;">
    <img :src="view.d" style="width:100%;height:auto;">
  </div>
  {{view.a}}
  {{view.b}}
  {{view.c}}
  <!--   {{product.a}} -->
  <button @click="addToCart">sads</button>
  <app-footer></app-footer>
</div>
</template>
<script>
import Header from './Header.vue'
import Login from './login.vue'
import { postRef } from '../firebaseConfig.js'
export default ({
  components: {
    appHeader: Header
  },
  firebase:{
    feeds : postRef,
  },
  data(){
    return{
        view:
     {
      a:'',
      b:'',
      c:'',
      d:'',
      key:''
    }
  }
},

methods:{
  addToCart:function(){
   postRef.push(this.view)
   this.view.picture = null
   this.view.displayName = null
   this.view.price = ''
   this.view.description = ''
   this.$router.push({name:'cart'})
 }
},
created(){
  console.log(this.$route.params.key);
  let _this = this
  postRef.child(this.$route.params.key).once("value")
  .then(function (snapshot) {
    console.log(snapshot.val())
    if(snapshot.val() === null){
      _this.$route.push({name:'shop'})
    }
    _this.view.a = snapshot.child("displayName").val()
    _this.view.b = snapshot.child("price").val()
    _this.view.c = snapshot.child("description").val()
    _this.view.d = snapshot.child("file").val()
    _this.view.key = snapshot.key
  })
}
})
</script>