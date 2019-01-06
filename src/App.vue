<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> :seller='seller':seller='seller'-->
    <Hheader :seller='seller'/>
		<Hnav/>
		<!-- !-- / <router -- -->
		
		<router-view></router-view>
  </div>
</template>

<script>
import Hheader from './components/header/header'
import Hnav from './components/nav/nav'

const ERROR_OK=0;
export default {
  name: 'App',
	data() {
		return{
			l:1,
			seller:{}
		}
	},
  components: {
    Hheader,
		Hnav
  },
	created(){
		
			this.$http.get('./static/data.json').then((response)=>{
				response=response.body;				
				console.log("response:", response)
				this.seller=response;
				console.log("this.seller:",this.seller)
			
			
			
// 			
// 			if(response.errno===ERROR_OK){
// 			// console.log("response.data:",this.l)
// 
// 			console.log("response.data:",this.seller)}else{
// 				// console.log(response.errno)
// 			}
			}
			)
	}
}
</script>

<style>

</style>
