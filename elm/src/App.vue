<template>
	<div id="app">
		<Hheader :sellerData='sellerData.seller' />
		<Hnav />
		<router-view v-if="flag" :goodsData="sellerData"></router-view>
	</div>
</template>
<!-- s -->
<script>
	import Hheader from './components/header/header1'
	import Hnav from './components/nav/nav'

	import Vue from 'vue'
	const ERROR_OK = 0;
	export default {
		name: 'App',
		data() {
			return {

				sellerData: {},
				goodsData: {},
				flag: false,
				Hub: new Vue({}),
				price: []
			}
		},
		components: {

			Hheader,
			Hnav,

		},
		created() {

			this.$http.get('./static/data.json').then((response) => {

				response = response.body;
				this.$nextTick(function() {
					this.sellerData = response;
				})



			})
		},
		mounted() {

			setTimeout(() => {
				this.goodsData = this.sellerData
				this.flag = true
			}, 20)
		}
	}
</script>

<style lang="less">
	@import "./assets/icon-font/style.css";

	* {
		padding: 0;
		margin: 0;
	}
</style>
