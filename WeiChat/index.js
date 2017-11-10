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

//引入find中的组件
import friends from "./components/find/friends.vue"
import saoyisao from "./components/find/saoyisao.vue"
import yaoyiyao from "./components/find/yaoyiyao.vue"
import driftBottle from "./components/find/driftBottle.vue"



let router = new VueRouter({
	routes: [{
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
	},{
		path: "/friends",
		component: friends
	},{
		path:"/saoyisao",
		component:saoyisao
	},{
		path:"/yaoyiyao",
		component:yaoyiyao
	},{
		path:"/driftBottle",
		component:driftBottle
	},{
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
	`
})