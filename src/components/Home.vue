<template>

  <div id="app">
  	<app-header></app-header>
  	<div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

		      <b-carousel-slide caption="Fresh life, good inside"
		                        text="Check out our product to recieve more fresh start."
		                        img-src="https://images.unsplash.com/photo-1441123285228-1448e608f3d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02bddc01e37b428821dd036309ae1832&auto=format&fit=crop&w=750&q=80">
		     <button class="btn btn-success" > 
		     	<a href="/Product" style="text-decoration: none; color: #fff;">
		     	Check now! </a>
		     </button>
		      </b-carousel-slide>


		      <b-carousel-slide 
				      caption="Want your life more exciting?"
				      img-src="https://images.unsplash.com/photo-1441123285228-1448e608f3d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02bddc01e37b428821dd036309ae1832&auto=format&fit=crop&w=750&q=80">
		       	<button class="btn btn-success"> Accept our challenge </button>
		      </b-carousel-slide>

		      
		      <b-carousel-slide img-src="https://images.unsplash.com/photo-1441123285228-1448e608f3d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02bddc01e37b428821dd036309ae1832&auto=format&fit=crop&w=750&q=80">
		      </b-carousel-slide>

		      <b-carousel-slide>
		        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
		             src="https://images.unsplash.com/photo-1441123285228-1448e608f3d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02bddc01e37b428821dd036309ae1832&auto=format&fit=crop&w=750&q=80" alt="image slot">
		      </b-carousel-slide>

		  
		       <b-carousel-slide>
		        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
		             src="https://images.unsplash.com/photo-1441123285228-1448e608f3d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02bddc01e37b428821dd036309ae1832&auto=format&fit=crop&w=750&q=80" alt="image slot">
		      </b-carousel-slide>
		</b-carousel>
    </div>
    	<div class="hero-body">
    		<div class="container has-text-centered">
    			<div class="column is-2">
    				<figure class="image is-4by2" style="margin-top: 28px;">
    					<img src="http://www.habitualfix.co.nz/aboutus_images/tree-hugger-wrap.png">
    				</figure>
    				<h1> More fresh, <br> 
    					More good health.</h1>
    				<p> Chouchou always taking care of you health. <br>
    					 You can checking our new product  <br> 
    					 everyday so you can buy fresh vegetable, <br>
    					  fruits and etc. And for those who  <br>
    					  afraid of eat vegetable, we have many <br> 
    					  challenge for you to fight with <br> 
    					what you fear.</p>
    					<button class="btn btn-success"> 
					     	<a href="/Product" style="text-decoration: none; color: #fff;">
					     Check now!</a></button>
    			</div>
    		</div>
    	</div>
  </div>
</template>
<script>
	import Header from './Header.vue'
	import Footer from './Footer.vue'
	export default {
		data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  components: {
			appHeader: Header,
      appFooter: Footer,
		}
}
</script>
