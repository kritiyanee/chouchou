<template>

  <div id="app">
  	<app-header></app-header>
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

		      <!-- Text slides with image -->
		      <b-carousel-slide caption="New challenge today"
		                        img-src="https://images.unsplash.com/photo-1471113082645-fde63c139087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c8c2cddc82108262f72fa5011b25532&auto=format&fit=crop&w=838&q=80"
		      >
		     <button class="btn btn-success" @click=""> 
		     	<a href="/Product" style="text-decoration: none; color: #fff;">
		      Do it now</a></button>
		      </b-carousel-slide>


		      <b-carousel-slide 
				      text="The scientist discover new herbs todat that help people"
				      img-src="https://images.unsplash.com/photo-1471113082645-fde63c139087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c8c2cddc82108262f72fa5011b25532&auto=format&fit=crop&w=838&q=80">
		       	<button class="btn btn-success" @click=""> read more </button>
		      </b-carousel-slide>

		      
		      <b-carousel-slide img-src="https://images.unsplash.com/photo-1471113082645-fde63c139087?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c8c2cddc82108262f72fa5011b25532&auto=format&fit=crop&w=838&q=80">
		      </b-carousel-slide>

		</b-carousel>

    		<section class="container-1">
    <div class="columns features">
      <div class="column is-4">
        <div class="card is-shady">
          <div class="card-image has-text-centered">
              <i class="fa fa-paw"></i>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Did you know? </h4>
              <p>You can't eat only vegetable. you must eat food hai full 5 moo.</p>
              <p><a href="#">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card is-shady">
          <div class="card-image has-text-centered">
              <i class="fa fa-empire"></i>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Veg me.</h4>
              <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem sed risus.</p>
              <p><a href="#">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card is-shady">
          <div class="card-image has-text-centered">
              <i class="fa fa-id-card-o"></i>
          </div>
          <div class="card-content">
            <div class="content">
              <h4> Leo integer malesuada nunc vel risus.  </h4>
              <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
              <p><a href="#">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



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
		}
}
</script>

