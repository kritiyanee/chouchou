<template>
	<div id="app">
		<router-view></router-view> 
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
		appHeader: Header,
		appFooter: Footer
	}
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu|Barlow+Condensed');

#app {
	
	font-family: 'Ubuntu', sans-serif;
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 16px;

}

</style>