<template>
	<div class="v-nav">
		<div class="v-flex">	<div class="v-items"><router-link to='/commod'>商品</router-link></div>
	<div class="v-items"><router-link to='/comment'>评论</router-link></div>
    <div class="v-items"><router-link to='/merchant'>商家</router-link></div>
	</div>
 
	</div>
</template>
<style scoped="scoped" lang="scss">
	.v-nav{
		.v-flex{
			display: flex;
			flex-direction: row;
			line-height: 40px;
			.v-items{
				flex: 1;
				text-align: center;
			}
			a{
				text-decoration: none;
			}
			&>a{
				display: none;
font-size: 12px;				background: #000000;
			}
		}
	}
	.v-items:hover{
		background: red;
	}
</style>