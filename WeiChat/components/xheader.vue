<template>
<div>
	<header class="app-header" style="" >
		<div class="_effect" >
			<div class="_cover-top"   style="overflow:visible">
				<div class="other" > <span class="iconfont icon-tips-jia"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span> <span class="iconfont icon-tips-add-friend"  style="display: none;"></span>
					<ul class="tips-menu tips-close" >
						<li > <span class="iconfont icon-tips-xiaoxi" ></span>
							<div >发起群聊</div>
						</li>
						<li > <span class="iconfont icon-tips-add-friend" ></span>
							<div >添加朋友</div>
						</li>
						<li > <span class="iconfont icon-tips-saoyisao" ></span>
							<div >扫一扫</div>
						</li>
						<li > <span class="iconfont icon-tips-fukuan" ></span>
							<div >收付款</div>
						</li>
					</ul>
					<div class="tips-masker"  style="display: none;"></div>
				</div>
				<div class="center" > 微信 <span class="parentheses"  style="">12</span> </div>
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