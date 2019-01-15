<template>
	<div class="goods">
		<div class="wrapper-menu">
			<ul>
				<li class="menu-items" v-for="good in goods.goods">

					<span class="menu-text"><span v-show="iconSet[good.type]" class="menu-icon" :class="iconSet[good.type]"> </span>{{good.name}}</span>
				</li>
			</ul>
			<!-- 	<template> 
				<dd></dd>s
			</template>
			 -->
		</div>

		<div class="wrapper-particulars">


			<div class="particulars-content">
				<ul>
					<li v-for="particulars in goods.goods">
						<h1>{{particulars.name}}</h1>
						<ul>
							<li v-for="foods in particulars.foods">
								<div class="particulars-image"><img :src="foods.icon" alt=""></div>
								<div class="particulars-text">
									<div class="particulars-name">{{foods.name }}</div>
									<div class="particulars-description">{{foods.description}}</div>
									<div class="sell-comment">
										<span>月售{{foods.sellCount}}份</span><span>好评率{{foods.rating}}</span>
										 
									</div>

									<div class="particulars-price">
										<span class="newPrice">¥{{foods.price}}</span><!-- 
										 --><span class="oldPrice" v-show="foods.oldPrice">{{foods.oldPrice}}</span>
									</div>

								</div>
							</li>
						</ul>
					</li>
				</ul>


			</div>
		</div>


	</div>

</template>

<script>
	export default {
		data() {
			return {
				goods: {},
				"iconSet": ["decrease", "special", '', "discount", "guarantee", "invoice"]
			}
		},
		props: {

		},
		created() {
			this.$http.get("../../static/data.json").then((response) => {
				response = response.body
				this.goods = response
			})
		}
	}
</script>
<style scoped="scoped" lang="less">
	.goods {
		position: absolute;
		bottom: 64px;
		top: 351px;

		display: flex;
overflow: hidden;

		.wrapper-menu {
			flex: 0 0 160px;
			width: 160px;
			background: #f3f5f7;
			

			.24px();

			ul {
				height: auto;

				.menu-items {
					height: 108px;
					display: table;
					// padding:0 12px;
					padding: 0 24px;

					.menu-text {
						width: 160px;
						display: table-cell;
						vertical-align: middle;

						.menu-icon {

							display: inline-block;

							width: 24px;
							height: 24px;

							&.decrease {
								width: 24px;
								height: 24px;

								background: url(./discount_3@2x.png);
							}

							&.discount {
								width: 24px;
								height: 24px;
								background: url(discount_3@2x.png);
							}

							&.guarangee {
								background-size: 24px;
								background: url("./guarantee_3@2x.png");

							}

							&.invoice {
								background-size: 24px;
								background: url(./invoice_3@2x.png);

							}

							&.special {
								background-size: 24px;
								background: url(./special_3@2x.png);

							}




						}
					}

					.goods-line()
				}



			}


		}

		width:100%;

		.wrapper-particulars {

			flex: 1;

			.particulars-content {
				ul {
					li {
						list-style: none;

						h1 {
							padding-left: 2rem;
							width: 100%;
							font-size: 2rem;
							color: rgb(147, 153, 159);
							line-height: 52px;
							background: #f3f5f7;
						}

						ul {

							// display: flex;
							li {
								padding: 36px;
								position: relative;
								list-style: none;
								.goods-line();

								.particulars-image {
									flex: 0, 0, 56px;
									display: inline-block;
								}

								//						display: ;

								.particulars-text {
									position: absolute;
									padding: 4px 0 0 20px;
									// flex: 1;
									display: inline-block;

									.particulars-name {
										font-size: 28px;
										color: rgb(7, 17, 27);
										line-height: 28px;
									}

									.particulars-description {
										margin: 16px 0 16px 0;
										.goods-sell()

									}

									.sell-comment {
										font-size: 0;
										span:first-child{
											
										
											}	
										span:last-child{
											
										 margin-left: 24px;
										}
										.goods-sell();

									}

									.particulars-price {
										.newPrice{font-size: 2.3rem;
										color: rgb(244,20,20);
										// font-weight: normal/700;
										font-weight: 700;
										line-height: 48px;}
										.oldPrice{
											margin-left: 16px;
											font-size: 1.67rem;
											color: rgb(147,153,159);
											// font-weight: normal/700;
											font-weight: 700;
											text-decoration: line-through;
											line-height: 48px;
										} 
										
										
									

									}

								}

							}

						}
					}
				}
			}
		}


		// 		
		// 			
		// 			.bar{
		// 				
		// 				.particulars-top{

		// 				
		// 				.particulars-content{
		// 					
		// 					position: relative;
		// 					
		// 					margin:36px;
		// 					.photograp{
		// 						width: 114px;
		// 						height: 114px;
		// 						// position: absolute;
		// 					}
		// 					.particulars-text{	
		// 						// top: 0px ;
		// 						// position: relative;
		// 						top: 0px ;
		// 						padding:4px 0  0 20px;
		// 						display: inline-block;
		// 						.particulars-name{
		// 						
		// 						}
		// 						.particulars-description{
		// 						}
		// 						.particulars-sell{
		// 							display: inline-block;
		// 							.goods-sell()
		// 
		// 						}
		// 						.particulars-comment{
		// 							display: inline-block;
		// 
		// 							.goods-sell ()
		// 
		// 						}
		// 						.particulars-price{
		// 							.goods-sell()
		// 
		// 						}
		// 						
		// 						
		// 						
		// 
		// 					}
		// 				}
		// 			}
		// 		
	}

	.goods-line {
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);

	}

	// .fs24{

	// }
	// 
	//  
	// .fs20{
	// 	font-size: 20px;
	// 	color: rgb(147,153,159);
	// 	font-weight: normal/700;
	// 	line-height: 48px;
	// }


	.goods-sell {
		font-size: 20px;
		color: rgb(147, 153, 159);
		line-height: 20px;
	}


	.24px {
		font-size: 2rem;
		// color: rgb(240, 20, 20);
		// font-weight: 200;
		line-height: 28px;
	}
</style>
