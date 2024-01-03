import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import { $http } from '@escook/request-miniprogram'

uni.$http = $http;

//请求拦截器
$http.beforeRequest = function (options) {
  // do somethimg...
  uni.showLoading({
  	title:'数据加载中...'
  });
}

//响应拦截器
$http.afterRequest  = function (){
	uni.hideLoading();
}

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif