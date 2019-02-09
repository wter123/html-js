<template>
	<div class="seller" ref="sellerScroll">
		<div class="seller-content">
			<div class="seller-top">
				<div class="seller-detail">
					<div class="detail-name">{{seller.name}}</div>
					<div class="detail-mix">
						<div class="star">
							<starView :size="24" :score="seller.score" :sellerData="this.seller"></starView>
						</div>
						<div class="rating-count">({{seller.ratingCount}})</div>
						<div class="sell">月售{{seller.sellCount}}份</div>
					</div><!-- // class="" -->
					<div class="collect ">
						<div v-on:click="collectChange" class="collect icon-favorite" :class="{collect1:true1 }"></div>
						<div class="colletDescription" v-if="true1">已收藏</div>
					</div>
				</div>
	
				<div class="seller-sell">
					<div class="items">
						<div class="item-wrapper">
							<div class="item">
								<div class="item-top">最低配送</div>
								<div class="item-bottom"><span>{{this.seller.minPrice}}</span><span>元</span></div>
							</div>

							<div class="item ">
								<div class="item-top">商家配送</div>
								<div class="item-bottom"><span>{{seller.deliveryPrice}}</span><span>元</span></div>
							</div>
							<div class="item ">
								<div class="item-top">平均配送时间</div>
								<div class="item-bottom"><span>{{seller.deliveryTime}}</span><span>分钟</span></div>
							</div>

						
						</div>

					</div>
				</div>
			</div>
			<split />
			<div class="bulltin-activity">
				<div class="seller-bulltin">
					<div class="bulltin-title">公告与活动 </div>
					<div class="bulltin-text">{{seller.bulletin}}</div>
				</div>
				<div class="seller-activity">
					<div class="youhui">
						
						<template v-for="(type) in  seller.supports">
							<div>
								<li class="special-icon" :class="'star'+type.type"></li>
								<li class="padding">{{type.description}}</li>
								
							</div>
						</template>
					</div>
				</div>
			</div>
			<split />
			<div class="seller-view">
				<div class="view-title">商家实景</div>
				<div class="view-content" ref="viewBScroll">
					<div class="view-scroll"><template v-for="pic in seller.pics">
							<img :src="pic" alt=""> </template></div>

				</div>

			</div>
			<split />
			<div class="seller-information">

				<div class="info-title">商家信息</div>
				<div class="info-content">
					<li v-for="info in seller.infos">{{ info }}</li>
				</div>

			</div>

			
		</div>
		
	</div>
</template>

<script>
	import starView from '../star/star.vue'
	import split from '../public/split.vue'
	import BScroll from "better-scroll"


	export default {
	
		data() {
			return {
				mao:[1,5,8,9,3,76],
				seller: {},
				collect:false,
				true1:false

			}
		},
	 
		methods: {
		 
	
collectChange(){
	this.collect=!this.collect
this.true1=!this.true1}
		},
		components: {
			starView,
			split,

		},
		created() {
			this.$http.get("../../static/data.json").then((response) => {
				let seller = response.body
				this.seller = seller.seller

			})



		},
		mounted() {


			setTimeout(() => {
				this.scroll = new BScroll(this.$refs.sellerScroll, {
					click: true
				});
				
				this.view = new BScroll(this.$refs.viewBScroll, {
					scrollX: true,
					eventPassthrough: 'vertical',
					click: true
				});
							
		
			}, 20)
		},
	}
</script>

<style lang="less" scoped="scoped">
	@import "./seller.less";
</style>
