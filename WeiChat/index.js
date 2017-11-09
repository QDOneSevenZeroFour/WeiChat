import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import $ from "jquery"
import "weui"
//window.$ = $

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

Vue.use(Vuex)
Vue.use(VueRouter)
//引入组件
import xheader from "./components/xheader.vue"
import xfooter from "./components/xfooter.vue"
import page1 from "./components/page/page1.vue"
import page2 from "./components/page/page2.vue"
import page3 from "./components/page/page3.vue"
import page4 from "./components/page/page4.vue"
import tab1 from "./components/page/tab/tab1.vue"
import tab2 from "./components/page/tab/tab2.vue"
import tab3 from "./components/page/tab/tab3.vue"

let router = new VueRouter({
	routes: [{
		path: "/index",
		component:xfooter,
		children: [{
			path: "/index/page1",
			component:page1,
			children: [{
					path: "tab1",
					component: tab1
				},{
					path: "tab2",
					component: tab2
				},{
					path: "tab3",
					component: tab3
				}]
			},{
				path: "/index/page2",
				component:page2
			},{
				path: "/index/page3",
				component:page3
			},{
				path: "/index/page4",
				component:page4
			}]
		},{
		path: '/',
		redirect: '/index/page1/tab1'
	}]
})
let store = new Vuex.Store({
	state: {
		title: "vue-webpack"
	}
})

new Vue({
	el: "#app",
	store,
	router,
	data: {

	},
	template: `
			<router-view></router-view>
	`,
	/*components: {
		xfooter,
		xheader
	}*/
})