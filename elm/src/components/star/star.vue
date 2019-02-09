<template>
	<div class="star" :class="starType" v-on:click="starSet">
		<template v-for="item in starSet  ">
			<div class="changeShow" :class="item"></div>
		</template>



	</div>
</template>


<script>
	const STAR_COUN = 6;
	const STAR_ON = "starOn"
	const STAR_HALF = "starHalf"
	const STAR_NO = "starOff"
	export default {
		props: {
			size: {
				type: Number
			},
			score: {
				type: Number
			},
			sellerData: {
				type: Object
			}

		},

		computed: {
			starType: function() {
				return "star" + this.size
			},
			starSet: function() {
				let starSet = []
				let _COUNT = Math.floor(this.score * 2) / 2

				let _HALF = _COUNT % 1

				for (let i = 0; i < Math.floor(_COUNT); i++) {
					starSet.push(STAR_ON)
				}
				if (_HALF != 0) {
					starSet.push(STAR_HALF)
				}
				while (starSet.length < 5) {
					starSet.push(STAR_NO)
				}
				return starSet
			}
		}
	}
</script>
<style lang="less">
	.star {
		&.star24 {
			.changeShow {
				display: inline-block;
				width: 12px;
				height: 12px;
				background-size: cover;

				&.starOn {
					background-image: url(./star24_on@2x.png);
				}

				&.starHalf {
					background-image: url(./star24_half@2x.png);
				}

				&.starOff {
					background-image: url(./star24_off@2x.png);
				}

				background-repeat: no-repeat;
			}
		}

		&.star36 {
			.changeShow {
				display: inline-block;
				background-size: cover;
				width: 18px;
				height: 18px;

				&.starOn {
					background-image: url(./star36_on@2x.png);
				}

				&.starHalf {
					background-image: url(./star36_half@2x.png);
				}

				&.starOff {
					background-image: url(./star36_off@2x.png);
				}

				background-repeat: no-repeat;
			}
		}

		&.star48 {


			.changeShow {
				display: inline-block;
				background-size: cover;


				&.starOn {
					width: 24px;
					height: 24px;
					background-image: url(./star48_on@2x.png);
				}

				&.starHalf {
					width: 24px;
					height: 24px;
					background-image: url(./star48_half@2x.png);

				}

				&.starOff {
					width: 24px;
					height: 24px;
					background-image: url(./star48_off@2x.png);
				}

				background-repeat: no-repeat;
			}

		}





	}
</style>
