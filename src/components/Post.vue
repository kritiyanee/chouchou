<template>
	<div>
		<app-header></app-header>
		<div class="row">
			<div class="col-sm-4">
			<br>
			<h1 style="text-align:center;font-size: 36px;"> SELL YOUR VEG HERE </h1>
			<b-form-file class="mt--" @change="previewImage" v-model="post.file" :state="Boolean(file)" placeholder="Choose photo .." style="text-align:left"></b-form-file>
			<div class="mt-3">
				<img :src="previewTempImage" class="img-fluid">
			</div>
			<div>
				<b-progress :value="value" :max="max" class="mb-3"></b-progress>
			</div>
			<br>

			<div>
				<b-input-group prepend="Name">
					<b-form-input v-model="post.displayName"></b-form-input>
				</b-input-group>
			</div>
		<br>
		<div>
			<b-input-group prepend="Price">
				<b-form-input v-model="post.price"></b-form-input>
			</b-input-group>
		</div>
		<br>
		<div>
				
		<b-form-textarea id="textarea1" 
		v-model="post.description"
		placeholder="Detail"
		:rows="2"
		:max-rows="3"
		>
	</b-form-textarea>
	<br>
	<button @click="sendPost()" class="btn btn-success" style="border-radius: 20px; width: 350px; margin: 0 auto;"> 
		Post
	</button>

</div>
<br>
</div>
</div> 
</div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import { dbAuth, postRef, storage} from '../firebaseConfig.js'

export default {
	components: {
		appHeader: Header,
		appFooter: Footer
	},
	data() {
		return {
			headerText: 'Post',
			post: {
				displayName: '',
				description:'',
				price:'',
				file:null
			},
			previewTempImage:null,
			value:100,
			max:0,
		}
	},
	methods: {
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
		sendPost: function() {
				let filename = this.post.file.name//การแยกชื่อไฟล์
				let ext = filename.slice(filename.lastIndexOf('.'))//การแยกนามสกุลไฟล์ เมื่อเวลาอัพโหลดตั้งชื่อใหม่ โดยเอาkeyมาใช้เพื่อไม่ให้ชื่อรูปมันซ้ำกัน
				let post = postRef.push(this.post)//นำลงdatabaseเก็บไว้โดยในตัวแปรpost โดยจะได้ค่าkeyออกมา
				let storageRef = storage.ref('post/'+post.key+ext) //ชื่อไฟล์รูป
				let upload = storageRef.put(this.post.file)//เอาไฟล์ขึ้นอัพโหลดในstorage
				let _this = this

				upload.on('state_changed',function(snapshot){
					//progress 
					_this.max = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				},function(error) {
					//display error
				},function(){
					var downloadURL = upload.snapshot.downloadURL
					postRef.child(post.key).update({file:downloadURL})
					_this.$router.push('/')
				})
			},
			created() {
				let _this = this

				postRef.child(this.$route).once("value").then(function(post){
					console.log(post);
					_this.post.displayName = post.displayName
				})
			}
		}
	}
	</script>