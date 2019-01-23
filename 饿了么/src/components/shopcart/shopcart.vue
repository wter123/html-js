<template>
	<div class="shopcsart">
		<div class="shopcart-content">
			<div class="shopcart-left">
				<div class="shopcart-wrapper"><div class="shopcart-logo"><div class="icon-shopping_cart"></div></div></div>
	<!-- <div class="shopcart-logo"><div class="icon-keyboard_arrow_right"></div></div> -->

			
			<div class="shopcart-price">0</div>
			<div class="shopcart-descrition">fffffffff</div>
		</div>
		<div class="shopcart-right"></div>
		</div>
		
	</div>
</template>
<style scoped="scoped" lang="less">
	
	.shopcsart{
		position: fixed;
		bottom: 110;
		left: 0;
		z-index: 50;
		background: #141d27;
		/* height: 100p6; */
		height: 88px;
		width: 100%;
		.shopcart-content{
			height: 88px;

			display: flex;
			.shopcart-left{font-size: 0;
				/* " */
				flex: 1;			height: 88px;
				display: table;
				/* display: inline-flex; */
				 /* align-items: center; */
				/* align-content:; */
				.shopcart-wrapper{
					display: inline-block;
vertical-align: middle;
					position: relative;
					top: -28px;
					width:110px;
					/* height:110px;		 */
					background: #141d27;
					border-radius: 50%;
					padding-top: 12px ;
					/* : 12px auto; */
					
					margin-left: 24px;
					margin-bottom: 4px;
					margin-right: 24px;
					
					.shopcart-logo{
						padding: ;
						.icon-shopping_cart{
							
							text-align: center;
							padding: 17px 0 0 0;
						/* line-height: 4rem; */
						
							font-size: 4rem;
							color: rgba(255,255,255,0.4);
						}
						
					width: 88px;
					height: 88px;
					/*  0 0 12px*/
					background: #2b343c;
					border-radius: 50%;

					/* margin-bottom: 16px; */
					/* margin: 12px 0 0 12px; */
					margin: auto;
				}
				}
				.shopcart-price{
					display: inline-block;

						/* vertical-align: top; */
					font-size: 2.667rem;
					padding-bottom: 24px;			
							/* margin-bottom: 16px; */
					color: rgba(255,255,255,0.4);
					font-weight: 700;
					/* line-height: 48px; */
				}
				.shopcart-descrition{
					display: inline-block;

						/* vertical-align: middle; */
						/* padding-bottom: 24px;			 */

					margin-left: 24px;
					border-left: rgba(255,255,255, 0.1);
					 
					font-size: 2.667rem;
					font-weight: 200;

					color: rgba(255,255,255,0.4);}
			}
			.shopcart-right{
				flex: 0 0 210px;
			}
		}
	}
</style>