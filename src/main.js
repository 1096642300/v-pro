import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//加载通用样式main.scss文件  webpack all in js
import "./stylesheets/main.scss"
//引入rem.js文件
import "./modules/rem"
//引入swiper.min.css样式
import "swiper/css/swiper.min.css"
//引入directive
import "./modules/directive"


import { 
  Lazyload , 
  InfiniteScroll , 
  Header , 
  Button,
  Tabbar,
  TabItem,
  Cell 
} from 'mint-ui';
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", Cell);

import axios from "axios"
Vue.prototype.$http = axios    

Vue.config.productionTip = false

new Vue({
  router, //this.$route 或者 this.$router
  store,  //this.$store  
  render: h => h(App)
}).$mount('#app')
