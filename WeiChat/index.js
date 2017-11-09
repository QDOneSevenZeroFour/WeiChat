import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import $ from "jquery"
//import "weui"
//window.$ = $
import "./resource/css/base.css"




Vue.use(Vuex)
Vue.use(VueRouter)
//引入组件

import xfooter from "./components/xfooter.vue"
import xheader from "./components/xheader.vue"
import chat from "./components/chat.vue"
import contact from "./components/contact.vue"
import find from "./components/find.vue"
import me from "./components/me.vue"
let router = new VueRouter({
	routes: [/*{
		path: "/index",
		component: xheader
	}, */{
		path: "/index",
		component: xfooter,
		children: [{
			path: "xheader",
			component: xheader,
			children: [{
				path: "chat",
				component: chat
			}]
		},{
				path: "contact",
				component: contact
			},{
				path: "find",
				component: find
			},{
				path: "me",
				component: me
			}]
	}, {
		path: '/',
		redirect: '/index/xheader/chat'
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
	components: {
		/*xheader,
		xfooter,
		chat*/
	}
})