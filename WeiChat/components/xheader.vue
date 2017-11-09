<template>
<div>
	<header class="app-header" style="" _v-c8294afa="">
		<div class="_effect" _v-c8294afa="">
			<div class="_cover-top" _v-60c89da3="" _v-c8294afa="" style="overflow:visible">
				<div class="other" _v-60c89da3=""> <span class="iconfont icon-tips-jia" _v-60c89da3="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span> <span class="iconfont icon-tips-add-friend" _v-60c89da3="" style="display: none;"></span>
					<ul class="tips-menu tips-close" _v-60c89da3="">
						<li _v-60c89da3=""> <span class="iconfont icon-tips-xiaoxi" _v-60c89da3=""></span>
							<div _v-60c89da3="">发起群聊</div>
						</li>
						<li _v-60c89da3=""> <span class="iconfont icon-tips-add-friend" _v-60c89da3=""></span>
							<div _v-60c89da3="">添加朋友</div>
						</li>
						<li _v-60c89da3=""> <span class="iconfont icon-tips-saoyisao" _v-60c89da3=""></span>
							<div _v-60c89da3="">扫一扫</div>
						</li>
						<li _v-60c89da3=""> <span class="iconfont icon-tips-fukuan" _v-60c89da3=""></span>
							<div _v-60c89da3="">收付款</div>
						</li>
					</ul>
					<div class="tips-masker" _v-60c89da3="" style="display: none;"></div>
				</div>
				<div class="center" _v-60c89da3=""> 微信 <span class="parentheses" _v-60c89da3="" style="">12</span> </div>
			</div>
		</div>
	</header>
<router-view></router-view>
</div>
</template>

<script>
</script>

<style scoped>
.app-header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 3;
    height: 45px;
    line-height: 45px;
    font-size: 19px;
    background: linear-gradient(to bottom, #303036, #3c3b40);
    color: #ffffff;
    text-align: center;
}
</style>