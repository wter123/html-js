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
		
		.v-flex{
			display: flex;
			flex-direction: row;
			line-height: 40px;
			.v-items{height: 80px;
			line-height: 80px;
				flex: 1;
				text-align: center;
			
			a{font-size: 2.167rem;
				text-decoration: none;
				&:hover {
				// display: none;
				// font-size: 1rem;
				// background: #42B983;
				text-decoration: underline;
				color: yellow;
			}
			}
			&:hover{background: red;
				
			}
			
			}
		}
	}
	
</style>