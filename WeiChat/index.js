import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import $ from "jquery"
import "weui"
//window.$ = $
import "./resource/css/base.css"

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

Vue.use(Vuex)
Vue.use(VueRouter)
//引入组件
import xheader from "./components/xheader.vue"
import weui from "./components/weui.vue"
import muse from "./components/muse.vue"
import tab1 from "./components/muse/tab1.vue"
let router = new VueRouter({
	routes: [{
		path: "/index",
		component: xheader
	}, {
		path: "/weui",
		component: weui
	}, {
		path: "/muse",
		component: muse,
		children: [{
			path: "tab1",
			component: tab1
		}]
	}, {
		path: '/',
		redirect: '/index'
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
		name: "qd",
		//txt
		/*txt: require("./resource/txt/data.txt"),
		html: require("./resource/html/index.html"),
		img: require("./resource/images/1.jpg"),*/

	},
	template: `
		<router-view></router-view>
	`,
	components: {
		xheader
	}
})