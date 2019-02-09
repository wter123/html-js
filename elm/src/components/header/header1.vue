<template>
	<div class="v-header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="60" height="60" src="./seller_avatar_256px.jpg" alt=""></div>
			<div class="content">
				<div class="title">
					<span class="brand1"> <img src="./brand@2x.png" alt=""></span>
					<span class="name">{{sellerData.name}}</span>
				</div>
				<div class="description">{{sellerData.description}}/{{sellerData.deliveryTime}}分钟送达</div>
				<div class="support">
					<span class="icon"><img src="./decrease_1@2x.png" alt=""></span>
					<span class="text" v-show="sellerData.supports[0].description">{{sellerData.supports[0].description}}</span>
				</div>
			</div>
			<div class="count-wrapper" v-on:click="showDetail">
				<span class="count">{{sellerData.supports.length}}个<span class="icon-keyboard_arrow_right "></span></span></span>
			</div>
		</div>
		<div class="bulltin-wrapper" v-on:click="showDetail">
			<span class="bulltin-title"><img src="./bulletin@2x.png" alt=""></span>
			<span class="bulltin-text">{{sellerData.bulletin}}</span><span class="bulltin-right-arrow"><i class="icon-keyboard_arrow_right">
				</i></span>
		</div>
		<div class="detail-bar" v-if="detailShow">
			<div class="detail clearfix">
				<div class="content-main">
					<div class="header">
						<div class="detail-name">{{sellerData.name}}</div>
						<div class="star">
							<starView :size="48" :score="sellerData.score" :sellerData="this.sellerData"></starView>
						</div>
					</div>
					<div class="detail-content">
						<div class="detail-title">
							<div class="line"></div>
							<div class="text">优惠信息</div>
							<div class="line"></div>
						</div>
						<div class="youhui">
							<template v-for="type in  sellerData.supports">
								<div>
									<li class="special-icon" :class="'star'+type.type"></li>
									<li class="padding">{{type.description}}</li>
								</div>
							</template>
						</div>
						<div class="notice">
							<div class="notice-title">
								<div class="notice-line"></div>
								<div class="notice-text">商家公告</div>
								<div class="notice-line"></div>
							</div>
							<div class="notice-content">{{sellerData.bulletin}}</div>
						</div>
					</div>
				</div>
				<div class="background-detail"></div>
			</div>
			<div class="detail-close icon-close" v-on:click="closedetail"></div>
		</div>
		<div class="background"><img src="./seller_avatar_256px.jpg" alt="" width="100%" height="100%"></div>
	</div>
</template>
<script>
	import star from "../star/star.vue"
	export default {
		props: {
			sellerData: {
				type: Object,
				default () {
					return {
						name: 's',
						supports: [{
							description: this.sellerData
						}]
					}

				}
			}
		},
		data() {
			return {
				// rData: {
				// supports,
				detailShow: false
			} //} ,
		},
		methods: {
			showDetail: function() {
				this.detailShow = true
			},
			closedetail: function() {
				this.detailShow = false
			}
		},
		components: {
			starView: star
		}
	}
</script>
<style></style>
<style scoped="scoped" lang="less">
	@import "../../assets/main/main.less";
	@import "../../assets/icon-font/style.css";
	@import "./header.less";


</style>
