<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> :seller='seller':seller='seller'-->
    <Hheader :sellerData='sellerData'/>
		<Hnav/>
		<!-- !-- / <router -- -->
		<Hgoods/> 
		<router-view></router-view>
  </div>
</template>

<script>
import Hheader from './components/header/header'
import Hnav from './components/nav/nav'


import Hgoods from './components/goods/goods'
const ERROR_OK=0;
export default {
  name: 'App',
	data() {
		return{
			// l:1,
			sellerData:{}
		}
	},
  components: {
    Hheader,
		Hnav,
		Hgoods
  },
	created(){
		
			this.$http.get('./static/data.json').then((response)=>{
				response=response.body;				
				// console.log("response:", response)
				// .seller
				this.sellerData=response;
				console.log("this.sellerData:",this.sellerData)
				
			
			
			
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

<style lang="less">
*{
	padding: 0;
	margin: 0;
	}
	
	html{font-size: 12px;}
	body {font-family: "Microsoft YaHei";color: #333;width: 100%;max-width: 1200px;min-width: 320px;margin:0 auto;}


</style>
