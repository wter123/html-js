<template>
	<div class="cartcontral">
		
		<transition name="move"  >
			<div class="cartcontral-decrease" @click="cartcontralDecrease" v-show="food.count>0">
				<div class="inner icon-remove_circle_outline"></div>
			</div>
		</transition>


		<div class="cartcontral-description" v-show="food.count>0">
			<div class="description-text">{{food.count}}</div>
		</div>
		<div class="cartcontral-add" v-on:click="cartcontralCount()">
			<div class="icon-add_circle"></div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'; 
	export default {
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			cartcontralCount() {
			
			
				if (!this.food.count) {
					Vue.set(this.food, "count", "1")
				} else
				if (this.food.count > 0) {
					this.food.count++
				}
			},
			cartcontralDecrease() {
				console.log(this.food.count)
				if (!this.food.count) {
					this.food.count = 0
				}
				if (this.food.count > 0) {
					this.food.count--
				}
			}
		}
		// ,
		
	}
</script>
<style scoped="scoped" lang="less">
	.cartcontral {
		display: inline-block;
		font-size: 0;
		padding: 6px;

		.cartcontral-decrease {
			display: inline-block;
			padding: 6px;
		
			transition: all  .41s linear;
			.icon-remove_circle_outline,
			.inner {

				display: inline-block;
				color: rgb(0, 160, 220);
				line-height: 48px;
				font-size: 4rem;
// 				display: inline-block;
// 				color: rgb(0, 160, 220);
// 				line-height: 48px;
// 				font-size: 4rem;
			}

			&.move-leave-active{
								// play-during: 700;
								opacity: 1;
								
				.inner {
					transition: all  .41s ;
					display: inline-block;
					transform: rotate(180deg);			
						 // transform: translate3D(24px,0,0);

				}
			
			}
&.move-enter {

								opacity: 0;
								
					.inner {transition: all  1.41s linear;
		//				display: inline-block;
				//	transform: rotate(180deg);			
						// transform: translate3D(24px,0,0);

					}
			// -active


		}
}
		.cartcontral-description {
			display: table;

			.description-text {
				display: table-cell;
				vertical-align: maddle;
				text-align: center;
				width: 48px;
				font-size: 1.6667rem;
				color: rgb(147, 153, 159);
				line-height: 48px;

			}

			display: inline-block;
		}

		.cartcontral-add {
			color: rgb(0, 160, 220);
			padding: 6px;
			line-height: 48px;
			font-size: 4rem;
			// color: rgb(7,17,27);"icon-add_circle
			display: inline-block;
		}
	}
</style>
