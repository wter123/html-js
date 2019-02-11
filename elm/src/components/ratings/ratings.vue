<template>
	<div class="ratings" ref="ratingsScroll">
		<div class="ratings-content">
			 <div class="ratings-detail">
				<div class="detail-left">
					<div class="score" v-if="initScore()">{{initScore()}}</div>
					<div class="score-description">综合评分</div>
					<div class="score-detail">高于周边商家{{ratings.seller.rankRate}}%</div>
				</div>
				<div class="detail-right">
					<div class="right-top">
						<div class="server">服务态度</div>
						<div class="server-star">
							<star :size="36" :score="ratings.seller.serviceScore" />
							</div><div class="star-score">{{ratings.seller.serviceScore}}
						</div>
					</div>
					
					<div class="right-middle">
						<div class="server">服务态度</div>
						<div class="server--star">
							<star :size="36" :score="ratings.seller.foodScore" />
						</div>
						<div class="star-score">{{ratings.seller.foodScore}}</div>
					</div>

					<div class=""></div>
					<div class="right-bottom">
						<div class="server">送达时间</div>
						<div class="time">{{initTime()}}分钟</div>
					</div>

				</div>
			</div>
			<split />
			<div class="ratings-two"><div class="ratings-wrapper"><ratingsselect :food='ratings' @foodShowb="ratingsShow" @ratingTypeSeed="sonRatingsType"/></div>
			<div class="ratings-content">
				<div class="content-wrapper">
					<li v-for="ratings in ratingsSelect()">
					<div class="avatar"><img :src="ratings.avatar" alt=""></div>
					<div class="content"><div class="top"><span class="name">{{ratings.username}}</span>
						<span class="time">{{ratings.rateTime | formatDate}}</span></div>
						<div class="top-two"><span class="star"><star :size="36" :score='ratings.score'></star></span><span v-show="ratings.deliveryTime" class="time-description">{{ratings.deliveryTime}}分钟送达</span></div>
	
						<div class="content-text" v-if="ratings.text">{{ratings.text}}</div>
						<div class="extra" v-if="ratings.recommend[0]"><span class="icon"></span><span class="food-name"><template v-for="recommend in ratings.recommend"><span class="extra-name">{{ recommend}}</span></template></span></div></div></li>
				</div>

</div>
			</div>
			<!-- .lenght -->

</div>
			
	</div>
</template>
<script>
	import split from '../public/split.vue'
import BScroll from 'better-scroll'
	import ratingsselect from '../ratingsselect/ratingsselect.vue'
	import {formatDate} from '../../common/js/formatDate.js'

	import star from '../star/star.vue'
	export default {
		data() {
			return {
				ratings: {
					seller:{
						rankRate:0
					}
				},
				show: false,
				RatingsType:0
			}
		},
		components: {
			split,
			ratingsselect,
			star,
			
		},
	
// 	computed:{
// 		}	,
	
		  filters: {
    formatDate (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
	},	
		methods: {


			initScore() {
				let score = 0
				let count = 0
			if(this.ratings.ratings){
				this.ratings.ratings.forEach(

					(Data) => {



						score = score + parseInt(Data.score)
						count += 1
						
					}
	)
			}	
			

				return Math.floor(score/count*10)/10
			},
			initTime() {
				let time = 0
				let count = 0
if(this.ratings.ratings){
				this.ratings.ratings.forEach((data) => {
					if (data.deliveryTime) {
						time = time + parseInt(data.deliveryTime)
						count += 1
					}
				})
			}
				

				return Math.floor(time / count )  
			},
		ratingsShow(e){
			
			this.show=e
		}
		,
		//sonRatingsType一定要先接受到data再使用，直接用不出来
		sonRatingsType(e){
// 			
// 		this.$nextTick(function(){
// 				this.scroll = new BScroll(this.$refs.ratingsScroll,{                       click: true});
// 
// 			})
			// co
			this.RatingsType=e},
		ratingsSelect(){
	
			if(this.ratings.ratings){
				if(this.show===true){
								
								let ra=[]
							ra=	this.ratings.ratings.filter((rating)=>{
				//		console.log(this.RatingsType) &&rating 
					if(	this.RatingsType===1){
									return rating.rateType===0 && rating.text
								}
								else if(	this.RatingsType===2){			
									return rating.rateType===1 && rating.text
				
								}
								else{			
										return rating.text
									
								}})
							return ra}
							else{
									let ra=[]
											ra=	this.ratings.ratings.filter((rating)=>{
									if(	this.RatingsType===1){
													
													
													return rating.rateType===0 
												}
												else if(	this.RatingsType===2){			
													return rating.rateType===1 
								
												}
												else{			
														return rating
												}})
											return ra
								
							return 	0	
					}
			}
		}
		},
		created() {
			this.$http.get("../../static/data.json").then((response) => {
				let ratings = response.body
				this.ratings = ratings

			})
		}
		,
		mounted(){			
 		this.$nextTick(function(){
 				this.scroll = new BScroll(this.$refs.ratingsScroll,{                       click: true});
 
 			})
 			
// 			setTimeout(()=>{
//            this.scroll = new BScroll(this.$refs.ratingsScroll,{                       click: true});
//         },20)
			}
		
	}
</script>
<style scoped="scoped" lang="less">
	@import './ratings.less';


</style>
