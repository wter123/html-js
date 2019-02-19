<template>
	<div class="v-header">
		<!-- <img src="../../assets/fendou.png" alt="" > <-->

		<div class="content-wrapper">
			 
			<div class="avatar">
				<img width="60" height="60" src="./seller_avatar_256px.jpg" alt=""></div>
			<div class="content">
				<div class="title">
					<span class="brand1"> <img src="./brand@2x.png" alt=""></span>
					<span class="name" v-show="sellerData.seller.name">{{sellerData.seller.name}}</span>
				</div>
				<div class="description">{{sellerData.seller.description}}/{{sellerData.seller.deliveryTime}}分钟送达</div>



				<div class="support">
					<span class="icon"><img src="./decrease_1@2x.png" alt=""></span>
					<span class="text">{{sellerData.seller.supports[0].description}}</span>

				</div>
			</div>
			<div class="count-wrapper" v-on:click="showDetail"><span class="count">{{}}个 ></span></div>
		</div>
		<div class="bulltin-wrapper">
			<span class="bulltin-title">公告</span>
			<span class="bulltin-text">{{sellerData.seller.bulletin}}</span><span class="bulltin-right-arrow" v-on:click="showDetail"><i>></i></span>
		</div>
		<div class="detail-bar" v-if="detailShow">
			<div class="detail clearfix">





				<div class="content-main">
					<div class="header">
						<div class="detail-name">{{sellerData.seller.name}}</div>
						<div class="star">
							<starView :size="48" :score="sellerData.seller.score" :sellerData="this.sellerData"></starView>
						</div>
					</div>
					<div class="detail-content">
						<div class="detail-title">

							<div class="line"></div>
							<div class="text">优惠信息</div>
							<div class="line"></div>
						</div>
						<div class="youhui">
							<!-- .description -->
							<template v-for="(type) in  sellerData.seller.supports">
								<div>
									<li :class="'star'+type.type"></li>
									<li class="padding">{{type.description}}</li>
									<!-- pa -->
								</div>
							</template>
						</div>

						<div class="notice">
							<div class="notice-title">
								<div class="notice-line"></div>
								<div class="notice-text">商家公告</div><div class="notice-line"></div></div>
							<div class="notice-content">{{sellerData.seller.bulletin}}</div>
						</div>
					</div>
				</div>






			</div>
			<div class="detail-close icon-close" v-on:click="closedetail"></div>
		</div>

	</div>
	<!-- </div> -->
</template>

<script>
	import star1 from "../star/star.vue"
	export default {
		props: {
			sellerData: {
				type: Object,
				default() {
			return {
				
				 
			}
			}
		},
		data() {
			return {
				detailShow: false,
				 
			}
		}


		,
		methods: {
			jinbu: function() {
				this.$route.go(-1)
			},
			showDetail: function() {
				this.detailShow = true
			},
			"closedetail": function() {
				this.detailShow = false
			}

		},
		components: {
			starView: star1
		},
	
				
						
		/*			,
		created(){
		this.$http.get('./static/data.json').then((response)=>{
						response=response.body;				
						// console.log("response:", response)
						// .seller
						if(response.seller!=0){
							this.sellerData=response;
		
						}*/	
					
					
		// 			
		// 			if(response.errno===ERROR_OK){
		// 			// console.log("response.data:",this.l)
		// 
		// 			console.log("response.data:",this.seller)}else{
		// 				// console.log(response.errno)
		// 			}
					}
					)
	}}
</script>

<style></style>
<style scoped="scoped" lang="less">
	 

	@import "../../assets/main/main.less";
	@import "../../assets/icon-font/style.css";
	@import "./header.less";
 
	// @import  'C:/Users/Administrator/Desktop/git/src/assets/main.less'	;

</style>
,
		mounted() {
			if (this.food.image) {

				document.querySelector(".food-img img").src = this.food.image
			}
		}
		
		default () {
			return {
				image: "./de4b0fc4cee046483b883070c71d14de.gif"
			}
		}
		
		,