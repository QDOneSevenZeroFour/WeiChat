<template>
	<div>
		<router-view></router-view>
		<div class="weui-tabbar">
				<a v-for="a in arr" @click="toggleTabbar(a.id)" :href="a.href" class="weui-tabbar__item" :class="{'weui-bar__item_on':id==a.id}">
				<span class="iconfont" :class="a.font" style="display: inline-block;position: relative;">
                        
                        <span v-show="a.bool" class="weui-badge" style="position: absolute;top: -2px;right: -13px;">{{a.num}}</span>
					</span>
					<p class="weui-tabbar__label">{{a.title}}</p>
				</a>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
					title: "微信",
					bool: true,
					href: "#/index/page1/tab1",
					font: "icon-wechat",
					num: 1,
					id: 1
				}, {
					title: "通讯录",
					bool: false,
					href: "#/index/page2",
					font: "icon-contact",
					num: 1,
					id: 2
				}, {
					title: "发现",
					bool: false,
					href: "#/index/page3",
					font: "icon-find",
					num: 1,
					id: 3
				}, {
					title: "我",
					bool: false,
					href: "#/index/page4",
					font: "icon-me",
					num: 1,
					id: 4
				}],
				id: 1
			}
		},
		components: {
			//		page1
		},
		methods: {
			toggleTabbar: function(id) {
				this.id = id
			}
		}
	}
</script>
<style scoped>
	/*.mu-paper{
		position: absolute;
	    bottom: 0;
	    width: 100%;
	}*/
</style>