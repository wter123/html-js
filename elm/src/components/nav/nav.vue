<template>
	<div class="v-nav">
		<div class="v-flex">	<div class="v-items"><router-link to='/'>商品</router-link></div>
	<div class="v-items"><router-link to='/comment'>评论</router-link></div>
    <div class="v-items"><router-link to='/merchant'>商家</router-link></div>
	</div>
 
	</div>
</template>
<script>
	import good from "../goods/goods.vue"
	export default{
		components:{
			good
		}
	}
</script>
<style scoped="scoped" lang="less">
	.v-nav{
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		.v-flex{
			display: flex;
			flex-direction: row;
			line-height: 20px;
			.v-items{
			line-height: 40px;
				flex: 1;
				text-align: center;
			a{font-size: 14px;
				text-decoration: none;
				&:hover ,&:active  {
				color: rgb(240,20,20);
			}
			}
			}
		}
	}
	
</style>