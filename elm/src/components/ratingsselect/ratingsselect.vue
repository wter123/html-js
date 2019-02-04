<template>
	<div class="ratingsselect">
		<div class="food-ratings-title"  >商品评价</div>
		<div class="food-ratings-icon">
			<span @click="clickSelectType(0)" class="all" :class="{ 'active' :selectType===0}">{{rating.all}}{{food.ratings.length}}</span>
			<span @click="clickSelectType(1)" class="recommend" :class="{active:selectType===1}">{{ rating.recommend}}{{ratingsRecommend()}}</span>
			<span @click="clickSelectType(2)" class="putter" :class="{active:selectType===2}">{{rating.putter}}{{ratingPutter()}}</span></div>
		<div class="ratingsselect-description">
			<span class="icon-check_circle" @click="circleHeightlight" :class="{'ccircleHeigh':circleHeigh}"></span><span class="ratingsselect-text">只看有内容的评价</span>
		</div>
	</div>
</template>
<script>
	// const selectType=2:
	export default {
		data(){
			return{selectType:  1 ,
			circleHeigh:false}
		},
		props: {
			food: {
				type: Object,
				
				default () {
					return {
						ratings: [{
							"1": '1'
						}]
					}
				}
			}, //_filterRatings
			ratings: {
				type: Array,
				default () {
					return [{
						all: "全部",
						recommend: "推荐",
						putter: "吐槽"

					}]
				}
				
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
// }
// }
		},
		
		methods: {		
			
		 circleHeightlight(){
			 this.circleHeigh  =!this.circleHeigh 
			 			 this.$emit("foodShowb",this.circleHeigh)	 

			 
		 },
			clickSelectType(number){
// 				// console.log(number)
// 								console.log(this.selectType),this.selectType]
// 								console.log(typeof this.selectType)[this.circleHeigh,this.selectType]
			 			 this.$emit("ratingTypeSeed",number)	 
				
				this.selectType=number
			},
			cratings(){
  
			// return this.circleHeigh
			//	}	
				}	,//,
			ratingsRecommend(){
				// console.log(6)
// 				console.log()
								return  this.food.ratings.filter((ratings) => {
									
									return ratings.rateType === 0
								}).length
			// return "5"	// 
			}
			,
			ratingPutter(){
				return  this.food.ratings.filter((ratings) => {
					
					return ratings.rateType === 1
				}).length
			}
	 
		
// ratingsLength

		}
	}
</script>
<style scoped="scoped" lang="less">
	@import "../../assets/main/main.less";
	.ratingsselect {
		.food-ratings-title {
			font-size: 28/12rem;
			font-weight: 700;
			color: rgb(7, 17, 27);
			line-height: 28px;
		}

		.food-ratings-icon {
			padding: 36px 0 36px 0;

			>span {
					font-size: 2rem;
				color: rgb(77, 85, 93);
				padding: 16px 24px;
				border-radius: 2px;
				line-height: 32px;
			}
.all{	border-radius: 2px;
				
				background: rgba(0, 160, 220,.2);}
// 			span:nth-child(1) {
// 			
// 
// 				// font-size: 6rem;
// 			}
.recommend{
	// .fontStyle(2rem,red,700);
	background: rgba(0, 160, 220, 0.2);
				margin-left: 16px;}
// 			span:nth-child(2) {
// 				
// 			}
.putter{
	
	background: rgba(7, 85, 93, 0.2);
				margin-left: 16px;
}
			span:nth-child(3) {
				
			}
.active{
				color: rgb(255, 255, 255);	
					background: rgb(0, 160, 220);
				}
			
		}

		.ratingsselect-description {
			border-top: 1px solid rgba(7, 17, 27, 0.1);
			padding: 24px;

			.ratingsselect-text {
				vertical-align: middle;
				font-size: 2rem;
				margin-left: 8px;
				// line-height: 42px;

			}

			.icon-check_circle {
				&.ccircleHeigh{
					color: green;

				}
				vertical-align: middle;

				font-size: 4rem;
				color: rgb(147, 153, 159);
				// line-height: 48px;
			}
		}
	}
</style>
