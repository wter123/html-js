
<template>
	<div class="goods">
		<div class="wrapper-menu" ref="wrapperMenu">
			<ul>
				<li class="menu-items" v-for="(good,index)  in goodsData.goods" :class="{'current': currentScroll===index }"
				 v-on:click="menuClick(index,$event)">
					<span class="menu-text"><span v-show="iconSet[good.type]" class="menu-icon" :class="iconSet[good.type]"> </span>{{good.name}}</span>
				</li>
			</ul>

		</div>

		<div class="wrapper-particulars" ref="wrapperParticulars">

			<ul class="particulars-content">
				<li v-for="particulars in goodsData.goods" class="particulars-hook">
					<h1>{{particulars.name}}</h1>
					<ul>
						<li v-for="food in particulars.foods" @click="selectFood(food,$event)">
							<div class="particulars-image"><img :src="food.icon" alt=""></div>
							<div class="particulars-text">
								<div class="particulars-name">{{food.name }}</div>
								<div class="particulars-description" v-show="food.description  ">{{food.description}}</div>
								<div class="sell-comment">
									<span>月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>

								</div>

								<div class="particulars-price">
									<span class="newPrice">¥{{food.price}}</span>
									<!-- 
																		
																		 --><span class="oldPrice" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
								</div>
								<div class="cartcontral-wrapper">
									<cartcontral :food="food" />
								</div>

							</div>
						</li>
					</ul>
				</li>
			</ul>


		</div>

		<shopcart :deliveryPrice="goodsData.seller.deliveryPrice" :minPrice="goodsData.seller.minPrice" :select-foods="foodTotal"></shopcart>
		<food :food='selectedFood' ref="food" />

	</div>

</template>

<script>
	import BScroll from "better-scroll";
	import shopcart from "../shopcart/shopcart.vue";
	import cartcontral from "../cartcontral/cartcntralo.vue";
	import food from '../food/food.vue'
	export default {
		props: {
			goodsData: {
				type: Object,
				default () {
					return {
						seller: {
							deliveryPrice: 1
						},
						goods: [{
							foods: []
						}],
					}
				}
			}
		},
		components: {
			shopcart: shopcart,
			cartcontral,
			food

		},
		data() {
			return {
				selectedFood: {},
				"iconSet": ["decrease", "special", '', "discount", "guarantee", "invoice"],
				positioning: [],
				scrollY: 0,
				flog: false

			}
		},

		created() {

			this.$http.get("../../static/data.json").then((response) => {

				this.$nextTick(function() {
					this._initScroll();
					this._positioning()
				})
			})
		},
computed: {
		//计算价格
		foodTotal() {
			let price = []
			if (this.goodsData.goods) {
				this.goodsData.goods.forEach((foods) => {

					foods.foods.forEach((food) => {
						if (food.count) {
							price.push(food)
						}
					})
				})
				return price
			}
		},


		//返回选中的序号
		currentScroll() {

			for (let l = 0; l < this.positioning.length; l++) {
				let height1 = this.positioning[l];

				let height2 = this.positioning[l + 1];



				if (!height2 || (height1 <= this.scrollY && this.scrollY < height2)) {

					return l
				}
			}
			return 0
		},
	},
	methods: {
		selectFood(food, event) {
			if (!event._constructed) {
				return
			}
			this.selectedFood = food
			this.$refs.food.foodShow()
		},

		menuClick(index, event) {
			if (!event._constructed) {
				return
			}
			this.getParticularsPosition = this.$refs.wrapperParticulars.getElementsByClassName("particulars-hook");
			let item = this.getParticularsPosition[index]


			this.particularsScroll.scrollToElement(item, 3)

		},


		//
		_initScroll() {
			this.menuScroll = new BScroll(this.$refs.wrapperMenu, {
					click: true
				}),
				this.particularsScroll = new BScroll(this.$refs.wrapperParticulars, {
					click: true,
					probeType: 3
				}),
				this.particularsScroll.on("scroll", (pos) => {
					this.scrollY = Math.abs(Math.round(pos.y));

				});

		},



		//获取详情页位置
		_positioning() {

			let height = 0;
			let i;
			let solide = this.$refs.wrapperParticulars.getElementsByClassName("particulars-hook");
			this.positioning.push(height);
			for (i = 0; i < solide.length; i++) {
				let item = solide[i]
				height = height + item.clientHeight
				this.positioning.push(height);
			}
		}
	},
	}
</script>
<style scoped="scoped" lang="less">
	@import "./goods.less";
</style>


