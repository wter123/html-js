<template>
	<div class="shopcart">
		<div class="shopcart-content">
			<div class="shopcart-left" @click="listContainerShow()">
				<div class="shopcart-wrapper">
					<div class="shopcart-logo" :class="{'HeightLight': totalCount>0}">
						<div class="icon-shopping_cart" :class="{'HeightLight': totalCount>0}"></div>
						<div class="shopcart-count-total" v-if="totalCount>0">{{totalCount}}</div>
					</div>
				</div>
				<div class="shopcart-price" :class="{'HeightLight':totalPrice}">¥ {{totalPrice}}</div>
				<div class="shopcart-descrition">另需配送费¥{{deliveryPrice}}元</div>
			</div>
			<div class="shopcart-right" @click="listShow">
				<div class="shopcart-buy" :class="{'HeightLight': totalPrice>=20 }">{{totalDescription}}</div>
			</div>

			<div>
				<div class="shopcart-list" v-show="listContainerQuiet">
					<div class="list-header">
						<span class="list-shopcart">购物车</span>
						<span class="list-clear" @click="empty">清空</span>

					</div>
					<div class="l" ref="shopcartList">
						<div class="list-container">
							<ul v-for="food in selectFoods">

								<li>
									<div class="list-name">
										{{food.name}}</div>
									<div class="newprice-list">
										¥{{food.price*food.count}}
									</div>
									<div class="cart-wrapper">
										<cartcontral :food="food"></cartcontral>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>


		</div>
	</div>
</template>
<script>
	import cartcontral1 from '../cartcontral/cartcntralo.vue'
	import BScroll from "better-scroll"

	export default {
		created() {
			this.$nextTick(function() {
				// this._initScroll();
				this.listScroll = new BScroll(this.$refs.shopcartList, {
					click: true,
					probeType: 3
				})
			})
		},
		methods: {



			empty() {

				this.selectFoods.forEach((food) => {
					food.count = 0
				})
			},
			_initScrolll() {
				this.listScroll = new BScroll(this.$refs.shopcartList, {
					click: true
				})
			},

			listContainerShow() {
				if (!this.totalCount) {


					return
				}

				this.listContainerQuiet = !this.listContainerQuiet
				console.log("‘”", this.listContainerQuiet)
			}
		},

		data() {
			return {
				listContainerQuiet: true
			}
		},
		computed: {
			listShow() {
				if (!this.totalCount) {
					console.log(0)
					this.listContainerQuiet = true
					return false
				}
				console.log("this.listContainerQuiet", this.listContainerQuiet)
				let show =






					this.listContainerQuiet
				// 				if(show){
				console.log(1)
												this.$nextTick(function() {
				// 							if(!this.listScroll){
				// 								// this.listScroll = new BScroll(this.$refs.shopcartList, {click:true}),
												this.listScroll = new BScroll(this.$refs.shopcartList, {
													click: true,
													probeType: 3
												})
											// }
				// 									if(show) {
				// 										 console.log(show,7)
				// 									}
				// 									else{
				// 								//		this.listScroll.refresh();
				// 									}
				//Slll
												})
				// 							}
				return show
			},
			totalCount() {
				let count = 0;
				this.selectFoods.forEach((food) => {
					count = count + parseInt(food.count);
				})
				return count
			},
			totalPrice() {
				let price = 0;
				this.selectFoods.forEach((food) => {
					price = price + food.count * food.price;
				})
				return price
			},
			totalDescription() {
				let des = 20 - this.totalPrice;
				if (this.totalPrice === 0) {
					return "¥20元起送"
				} else if (0 < this.totalPrice && this.totalPrice < 20) {
					return `还差${des}元起送`
				} else {

					return "去结算"
				}
			}

		},
		props: {
			foods: {
				type: Object
			},
			deliveryPrice: {
				type: Number,
				defualt: 1
			},
			minPrice: {
				type: Number
			},
			selectFoods: {
				type: Array,
				default () {
					return [{
						price: 10,
						count: 10
					}]
				}
			}
		},
		components: {
			cartcontral: cartcontral1
		}
	}
</script>
<style scoped="scoped" lang="less">
	@import "./shopcart.less";
</style>
