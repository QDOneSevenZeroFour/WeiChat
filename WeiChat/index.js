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

//引入contact中的组件
import newfriends from "./components/contact/new-friends.vue"
import groupChat from "./components/contact/group-chat.vue"
import addfriends from "./components/contact/add-friends.vue"

//引入find中的组件
import friends from "./components/find/friends.vue"
import saoyisao from "./components/find/sao-yi-sao.vue"
import yaoyiyao from "./components/find/yao-yi-yao.vue"
import driftBottle from "./components/find/drift-bottle.vue"

let router = new VueRouter({
	routes: [{
		path: "/index",
		component: xfooter,
		children: [{
			path: "chat",
			component: chat
		}, {
			path: "contact",
			component: contact
		}, {
			path: "find",
			component: find
		},{
			path:"me",
			component:me
		}]
	},{
		path: "/newfriends",
		component: newfriends
	},{
		path: "/groupChat",
		component: groupChat
	},{
		path: "/addfriends",
		component: addfriends
	},{
		path: "/friends",
		component: friends
	},{
		path: "/saoyisao",
		component: saoyisao
	}, {
		path: "/yaoyiyao",
		component: yaoyiyao
	}, {
		path: "/driftBottle",
		component: driftBottle
	}, {
		path: '/',
		redirect: '/index/chat'
	}]
})

let store = new Vuex.Store({
	state: {
		bool:false
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