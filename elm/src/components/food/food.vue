<template>
	<transition name='move'>
		<!--  -->
		<div class="food" v-show="detailShow" ref="foodScroll">
			<div class="food-content">
				<div class="close icon-close" v-on:click="close"></div>
				<div class='food-img'>
					<img :src="food.image" alt="">
				</div>
				<div class="food-description">
					<div class="title">{{food.name}}</div>
					<div class="description-text">
						<span class="sell">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
					</div>
					<div class="price"><span class="newPrice">¥{{food.price}}</span><span class="oldPrice" v-show="food.oldPrice">¥{{food.oldPrice}}</span></div>
					<div class="shpocart">
						<div class="shpocart-content" @click="cartcontralShowF" v-show="!food.count">
							加入购物车
						</div>
						<cartcontral v-show="food.count " :food="food" />
					</div>
				</div>
				<split />
				<div class="food-detail">
					<div class="introduce-info">
						<div class="introduce">
							商品介绍</div>
						<div class="info">{{food.info}}</div>
					</div>
					<split />
					<div class="food-ratings">
						<ratingsselect :food="food" @foodShowb="acceptR" @ratingTypeSeed="ratingTypeAccept" />
					</div>
					<div class="ratings">
						<div class="ratings-content" v-show="food.ratings && food.ratings.length">
							<ul v-for="rating in ratingsshow()">
								<li>
									<div class="rating-top">
										<div class="ratings-time">{{rating.rateTime}}</div>
										<div class="ratings-username">{{rating.username}}</div>
										<div class="ratings-avatar"> <img :src="rating.avatar" alt=""></div>
									</div>
									<div class="ratings-bottom">
										<div class="icon-thumb_up"></div>
										<div class="ratings-text">{{rating.text}}</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="rating-blank" v-show="!food.ratings ||  !food.ratings.length">暂无评论</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>


<script>
	import BScroll from "better-scroll"
	import ratingsselect from "../ratingsselect/ratingsselect.vue"
	import split from "../public/split.vue"
	import cartcontral from "../cartcontral/cartcntralo.vue"
	import vue from 'vue'
	export default {

		components: {
			ratingsselect,
			split,
			cartcontral
		},
		data() {
			return {
				cartcontralShow: false,
				detailShow: false,
				rating: false,
				ratingType: 0
			}
		},
		props: {
			food: {
				type: Object,
			}
		},
		methods: {
			cartcontralShowF() {
				if (!this.food.count) {
					vue.set(this.food, "count", 1)
				}

			},
			ratingsshow() {
				if (this.food.ratings) {
					if (this.rating === true) {
						let
							text = this.food.ratings.filter((rating) => {
								if (this.ratingType === 0) {
									return rating.text && rating
								} else if (this.ratingType === 1) {
									return rating.text && rating.rateType === 0
								} else if (this.ratingType === 2) {
									return rating.text && rating.rateType === 1
								}
							})

						return text
					} else {
						let text = this.food.ratings.filter((rating) => {
							if (this.ratingType === 0) {
								return rating

							} else if (this.ratingType === 1) {
								return rating.rateType === 0
							} else if (this.ratingType === 2) {
								return rating.rateType === 1
							}

						})
						return text
					}
				}
			},
			acceptR(e) {
				this.rating = e
			},
			ratingTypeAccept(e) {
				this.ratingType = e
				console.log(this.ratingType)
			},
			close() {
				this.detailShow = false
			},
			foodShow() {
				this.detailShow = true
				this.$nextTick(function() {
					this.bfoodScroll = new BScroll(this.$refs.foodScroll, {
						click: true
					})
				})
			}
		},
	}
</script>



<style lang="less" scoped="scoped">
	@import "./food.less";
	@import "../../assets/main/main.less";

</style>
