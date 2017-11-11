<template>
	<div>
	<section class="app-content" style="" >
		<div class="_full_inner _scroll _effect component-chat" >
			<div class="weui_search_bar" >
				<form class="weui_search_outer">
					<div class="weui_search_inner"> <i class="weui_icon_search"></i> <input type="search" class="weui_search_input" placeholder="搜索">
						<a href="javascript:" class="weui_icon_clear" style="display: none;"></a>
					</div> <label class="weui_search_text"> <i class="weui_icon_search"></i> <span>搜索</span> </label> </form>
				<a href="javascript:" class="weui_search_cancel">取消</a>
			</div>
			<ul class="wechat-list" >
				<li class="item _line-fine chat-item-transition" >
					<div class="info"  style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div class="ico-box" > <i  class="_news-count">1</i>
							<div class="ico" > <img alt="pic"  src="//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg"> </div>
						</div>
						<div class="desc" >
							<div class="desc-time" >09:06</div>
							<div class="desc-title" >Tom</div>
							<div class="desc-message" >
								<div class="desc-mute iconfont icon-mute"  title="false" style="display: none;"></div> <span  title="friends">Tom</span> <span >lol</span> </div>
						</div>
					</div>
					<div class="handle" >
						<div class="handle-unread"  style="display: none; touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为未读</div>
						<div class="handle-unread"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为已读</div>
						<div class="handle-del"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">删除</div>
					</div>
				</li>
				<li class="item _line-fine chat-item-transition" >
					<div class="info"  style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div class="ico-box" > <i  class="_news-dot">1</i>
							<div class="ico" > <img alt="pic"  src="//ad-gold-cdn.xitu.io/1499913766441c45960d8bd44ed5ffcf0d4a67d0aa317.jpg"> </div>
						</div>
						<div class="desc" >
							<div class="desc-time" >17:30</div>
							<div class="desc-title" >工作群</div>
							<div class="desc-message" >
								<div class="desc-mute iconfont icon-mute"  title="true"></div> <span  title="group" style="display: none;">领导:</span> <span >大家下班的时候记得锁好门</span> </div>
						</div>
					</div>
					<div class="handle" >
						<div class="handle-unread"  style="display: none; touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为未读</div>
						<div class="handle-unread"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为已读</div>
						<div class="handle-del"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">删除</div>
					</div>
				</li>
				<li class="item _line-fine chat-item-transition" >
					<div class="info"  style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div class="ico-box" > <i  class="_news-count">11</i>
							<div class="ico" > <img alt="pic"  src="//ad-gold-cdn.xitu.io/14999139497307c668d55b4dd5984b6accc6bf41206a8.jpg"> </div>
						</div>
						<div class="desc" >
							<div class="desc-time" >16:26</div>
							<div class="desc-title" >稀土圈</div>
							<div class="desc-message" >
								<div class="desc-mute iconfont icon-mute"  title="false" style="display: none;"></div> <span  title="service" style="display: none;">:</span> <span >挖掘最优质的互联网技术</span> </div>
						</div>
					</div>
					<div class="handle" >
						<div class="handle-unread"  style="display: none; touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为未读</div>
						<div class="handle-unread"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为已读</div>
						<div class="handle-del"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">删除</div>
					</div>
				</li>
				<li class="item _line-fine chat-item-transition" >
					<div class="info"  style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div class="ico-box" > <i  class="_news-count" style="display: none;">0</i>
							<div class="ico" > <img alt="pic"  src="//tb1.bdstatic.com/tb/cms/ngmis/file_1453447545023.jpg"> </div>
						</div>
						<div class="desc" >
							<div class="desc-time" >16:26</div>
							<div class="desc-title" >饿了么</div>
							<div class="desc-message" >
								<div class="desc-mute iconfont icon-mute"  title="false" style="display: none;"></div> <span  title="service" style="display: none;">:</span> <span >饿了么网上订餐平台</span> </div>
						</div>
					</div>
					<div class="handle" >
						<div class="handle-unread"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为未读</div>
						<div class="handle-unread"  style="display: none; touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">标为已读</div>
						<div class="handle-del"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">删除</div>
					</div>
				</li>
			</ul>
		</div>
	</section>
	</div>
</template>

<script>
</script>

<style scoped>
.app-content {
    padding-top: 45px;
    padding-bottom: 50px;
    overflow: hidden;
    position: relative;
    height: 100%;
}

.app-content ._full_inner {
    z-index: 2;
}
</style>