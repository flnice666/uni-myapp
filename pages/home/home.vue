<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(item, index) in swiperList" :key="i">
				<view class="swiper-item">
					<image :src="item.image"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: []
			};
		},
		onLoad() {
			this.getSwiperList();
		},
		methods:{
			async getSwiperList(){
				// const {data:res} = uni.$http('');
				const res = {
					data:{
						swiperList:[
							{
								image: 'https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg',
								name: '山路'
							},
							{
								image: 'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg',
								name: '湖水'
							},
							{
								image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
								name: '海底'
							}
						]
					},
					message:{
						status: 200
					}
				}
				if(res.message.status !== 200){
					return 
					return uni.showToast({
						title: '接口返回失败！',
						icon:'none'
					})
				}
				this.swiperList = res.data.swiperList;
			},
		}
	}
</script>

<style lang="scss">
swiper{
	height: 330rpx;
	.swiper-item{
		width: 100%;
		height: 100%;
	}
	image{
		width: 100%;
		height: 100%;
		
	}
	
}
</style>
