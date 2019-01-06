<template>
	<div class="v-header">	
		<!-- <img src="../../assets/fendou.png" alt="" > -->
		<div class="avator">
		<img :src="seller.avatar" alt="">{{seller }}</div>

	</div>
</template>

<script>
export default{
	props:{
		seller:{
			type:Object
		}
	},
	data(){
		return{  
		als:"jk"
		}	
		}
		
	
	,
	methods:{
		jinbu:function (){
	this.$route.go(-1)	}	

}
}
</script>

<style></style>
<style scoped="scoped" lang="less">
	.v-header{
		width:100%;
		height: auto;
		img{
			width: 100%;
			height: 100px;
		}
	}
</style>