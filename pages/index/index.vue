<template>
	<view class="page-index">

		<!-- 顶部轮播 -->
		<view class="swiper-center">
			<swiper class="swiper" autoplay="true" interval="2000" circular="true" indicator-dots="true">
				<swiper-item v-for="(item,index) in swiperList" :key="index" class="swiper-item">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 菜单栏 -->
		<view class="menu">
			<template v-for="item in menuList" :key="item.id">
				<view class="menu-item" @click="toClassifyPage(item.id)">
					<image :src="item.image" class="menu-item-image"></image>
					<text class="menu-item-text">{{item.desc}}</text>
				</view>
			</template>
		</view>
		
		<!-- 限时秒杀 -->
		<view class="limit-time">
			
			<view class="limit-time-top">
				<text class="limit-time-title">限时优惠</text>
				<text class="limit-time-end">距结束:
				</text>
			</view>
			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//轮播列表
				swiperList: [
					'../../static/images/home/banner-1.jpg',
					'../../static/images/home/banner-2.jpg',
					'../../static/images/home/banner-3.jpg',
				],

				//菜单列表
				menuList: [{
					id: 1,
					image: '../../static/images/home/menu-lanmei.jpg',
					desc: '新鲜水果'
				}, {
					id: 2,
					image: '../../static/images/home/menu-vegetable.jpg',
					desc: '蔬瓜菜品'
				},{
					id: 3,
					image: '../../static/images/home/menu-beef.jpg',
					desc: '飞禽走兽'
				},{
					id: 4,
					image: '../../static/images/home/menu-fish.jpg',
					desc: '海鲜水产'
				},{
					id: 5,
					image: '../../static/images/home/menu-juice.jpg',
					desc: '酒水饮料'
				}],
				
				//首页数据列表
				dataList:[]
			}
		},
		onLoad() {
			this.getIndexLists()

		},
		methods: {
			getIndexLists(){
				let that=this
				uni.showLoading({
					title:'加载中',
					mask:true
				})
				this.$Http.getIndexLists().then(res=>{
					uni.hideLoading()
					if(res.code==1){
						this.dataList=res.data
						
						// console.log(this.dataList)
					}
				}).catch(err=>{
					uni.hideLoading()
				})
			},
			toClassifyPage(id){
				const categoryId=id
				
				this.$router.push({path:'/pages/classify/index',query:{categoryId}})
				// console.log(this.$router)
			}
		}
	}
</script>

<style>
	.swiper-center {
		display: flex;
		justify-content: center;
		border-radius: 20px;
	}

	.swiper {
		width: 80%;
		height: 400rpx;
		box-shadow: 0px 5px 20px;
		border-radius: 20px;
	}

	.swiper-item {
		/* background: #fff center center no-repeat; */
		border-radius: 20px;
	}

	.swiper-item image {
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	.menu {
		margin-top: 30px;
		display: flex;
	}

	.menu-item {
		display: flex;
		width: 20%;
		flex-direction: column;
		align-items: center;
	}

	.menu-item-image {
		border-radius: 50%;
		width: 60px;
		height: 70px;
	}

	.menu-item-text {
		margin-top: 10px;
		font-size: 20rpx;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
