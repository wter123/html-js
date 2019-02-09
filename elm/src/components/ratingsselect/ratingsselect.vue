<template>
	<div class="ratingsselect">
		<div class="food-ratings-title">商品评价</div>
		<div class="food-ratings-icon">
			<span @click="clickSelectType(0)" class="all" :class="{ 'active' :selectType===0}">{{rating.all}}{{lengthi}}</span><!-- food.ratings.lengthfood.ratings. -->
			<span @click="clickSelectType(1)" class="recommend" :class="{active:selectType===1}">{{ rating.recommend}}{{ratingsRecommend()}}</span>
			<span @click="clickSelectType(2)" class="putter" :class="{active:selectType===2}">{{rating.putter}}{{ratingPutter()}}</span></div>
		<div class="ratingsselect-description">
			<span class="icon-check_circle" @click="circleHeightlight" :class="{'ccircleHeigh':circleHeigh}"></span><span class="ratingsselect-text">只看有内容的评价</span>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				selectType: 1,
				circleHeigh: false,
				length:0
			}
		},
		props: {
			food: {
				type: Object,
			 
			},
			rating: {
				type: Object,
				default () {
					return {
						recommend: "推荐",
						all: "全部",
						putter: "吐槽"
					}
				}
			}

		},
computed:{
		lengthi(){
				if(this.food.ratings ){
					
				return	 this.food.ratings.length	 ////length=
				
				}
				return 0
			},
}
,
		methods: {
			 
		

			circleHeightlight() {
				this.circleHeigh = !this.circleHeigh
				this.$emit("foodShowb", this.circleHeigh)


			},
			clickSelectType(number) {
				this.$emit("ratingTypeSeed", number)
				this.selectType = number
			},
			cratings() {
			},
			ratingsRecommend() {
				if (this.food.ratings) {
					return this.food.ratings.filter((ratings) => {
						return ratings.rateType === 0
					}).length
				}
			},
			ratingPutter() {
				if (this.food.ratings) {
					return this.food.ratings.filter((ratings) => {
						return ratings.rateType === 1
					}).length
				}
			}
		}
	}
</script>
<style scoped="scoped" lang="less">
	@import "../../assets/main/main.less";

	.ratingsselect {
		.food-ratings-title {
			font-size: 14px;
			font-weight: 700;
			color: rgb(7, 17, 27);
			line-height: 14px;
		}

		.food-ratings-icon {
			padding: 18px 0 18px 0;

			>span {
				font-size: 12px;
				color: rgb(77, 85, 93);
				padding: 8px 12px;
				border-radius: 1px;
				line-height: 16px;
			}

			.all {
				border-radius: 1px;
				background: rgba(0, 160, 220, .2);
			}

			.recommend {
				background: rgba(0, 160, 220, 0.2);
				margin-left: 8px;
			}

			.putter {
				background: rgba(7, 85, 93, 0.2);
				margin-left: 8px;
			}

			// span:nth-child(3) {}
			.active {
				color: rgb(255, 255, 255);
				background: rgb(0, 160, 220);
			}
		}
		.ratingsselect-description {
			border-top: 1px solid rgba(7, 17, 27, 0.1);
			padding: 12px;

			.ratingsselect-text {
				vertical-align: middle;
				font-size: 12px;
				margin-left: 4px;
			}
			.icon-check_circle {
				&.ccircleHeigh {
					color: green;
				}
				vertical-align: middle;
				font-size: 24px;
				color: rgb(147, 153, 159);
			}
		}
	}
</style>
