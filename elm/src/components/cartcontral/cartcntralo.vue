<template>
	<div class="cartcontral">

		<transition name="move">
			<div class="cartcontral-decrease" @click.stop="cartcontralDecrease($event)" v-show="food.count>0">
				<div class="inner icon-remove_circle_outline"></div>
			</div>
		</transition>
		<div class="cartcontral-description" v-show="food.count>0">
			<div class="description-text">{{food.count}}</div>
		</div>
		<div class="cartcontral-add" v-on:click.stop="cartcontralCount($event)">
			<div class="icon-add_circle"></div>
		</div>
	</div>
</template>
<script>
	var add = true
	var decrease = true
	import Vue from 'vue';
	export default {
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			cartcontralCount(event) {
				if (add) {
					add = false
					if (!event._constructed) {
						return
					}

					if (!this.food.count) {
						Vue.set(this.food, "count", "1")
					} else
					if (this.food.count > 0) {
						this.food.count++
					}
					setTimeout(() => {
						add = true
					})
				}

			},
			cartcontralDecrease(event) {
				if (decrease) {
					decrease = false
					if (!event._constructed) {
						return
					}
					this.$emit("cartcontralCount", this.food.count)
					if (!this.food.count) {
						this.food.count = 0
					}
					if (this.food.count > 0) {
						this.food.count--
					}
				}
				setTimeout(() => {
					decrease = true
				}, 10)

			}
		}
	}
</script>
<style scoped="scoped" lang="less">
	.cartcontral {
		display: inline-block;
		font-size: 0;
		padding: 3px;

		.cartcontral-decrease {
			display: inline-block;
			padding: 3px;

			.icon-remove_circle_outline,
			.inner {

				display: inline-block;
				color: rgb(0, 160, 220);
				line-height: 24px;
				font-size: 24px;
			}

			&.move-leave-active {
				opacity: 1;

				.inner {
					transition: all .41s;
					display: inline-block;
					transform: rotate(180deg);
				}

			}

			&.move-enter {
				opacity: 0;

				.inner {
					transition: all 1.41s linear;

				}


			}
		}

		.cartcontral-description {
			display: table;

			.description-text {
				display: table-cell;
				vertical-align: maddle;
				text-align: center;
				width: 24px;
				font-size: 8px;
				color: rgb(147, 153, 159);
				line-height: 24px;

			}

			display: inline-block;
		}

		.cartcontral-add {
			color: rgb(0, 160, 220);
			padding: 3px;
			line-height: 24px;
			font-size: 24px;
			display: inline-block;
		}
	}
</style>
