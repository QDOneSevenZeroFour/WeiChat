<template>
	<div>
		<header class="app-header" style="" _v-c8294afa="">
			<div class="_effect _effect--50" _v-c8294afa="">
				<div class="_cover-top" _v-60c89da3="" _v-c8294afa="" style="overflow:visible">
					<div class="other" _v-60c89da3=""> <span class="iconfont icon-tips-jia" _v-60c89da3="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: none;"></span> <span class="iconfont icon-tips-add-friend" _v-60c89da3="" style="display: none;"></span>
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
					<div class="center" _v-60c89da3=""> 发现 <span class="parentheses" _v-60c89da3="" style="display: none;">12</span> </div>
				</div>
			</div>
		</header>
		<section class="app-content" style="" _v-c8294afa="">

			<div class="_full_router component-albums-friends cover-transition" _v-365808fa="" _v-1df058c8="">
				<div class="_full_inner" _v-365808fa="">
					<div class="_cover-top" _v-f50d4fca="" _v-365808fa="">
						<div class="top-back" _v-f50d4fca="">
							<a href="#/index/find" style="color:#fff">
							<div class="_ellipsis iconfont icon-return-arrow v-link-active" _v-f50d4fca="">返回</div>
							</a>
						</div>
						<div class="top-other" _v-f50d4fca="">
							<div class="_align-right" _v-f50d4fca=""> <span class="iconfont" _v-f50d4fca=""></span> </div>
						</div>
						<div class="top-title _effect" _v-f50d4fca="">
							<p _v-f50d4fca=""> <span _v-f50d4fca="">朋友圈</span> </p>
						</div>
					</div>
					<div class="_cover-content _effect" _v-365808fa="">
						<div class="drag-reflash" _v-365808fa="" style="top: -40px; transform: rotate(0deg);"></div>
						<div class="drag-wrap" id="drag-wrap" _v-365808fa="">
							<div class="drag-inner" id="drag-inner" _v-365808fa="" style="transform: translate3d(0px, 0px, 0px);">
								<header class="home-pic" _v-365808fa="">
									<div class="home-pic-base" _v-365808fa="">
										<div class="top-pic" _v-365808fa="">
											<div class="top-pic-inner" style="background-image:url(http://ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg)" _v-365808fa=""> </div>
										</div>
										<div class="top-name _ellipsis" _v-365808fa="">yangtao</div>
									</div>
								</header>
								<section class="home-content" _v-365808fa=""> </section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<router-view transition="cover"></router-view>
	</div>
</template>

<script>
</script>

<style scoped>
	.app-content{
		height: 500px;
	}
	._cover-content {
		width: 100%;
		padding-top: 0;
		overflow: hidden;
	}
	
	.drag-wrap {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: auto;
		background-color: #2e3132;
	}
	
	.drag-inner {
		width: 100%;
		/* height: 1000px; */
		box-shadow: 0px 4px 16px rgba(0, 0, 0, .15);
		background-color: #ffffff;
	}
	
	.home-pic {
		width: 100%;
		margin-top: -90px;
		position: relative;
		height: 370px;
		background: url(../../resource/images/find-bg.png) no-repeat center center;
		background-size: cover;
		
	}
	
	.home-pic-base {
		position: absolute;
		left: 0;
		bottom: -22px;
		width: 100%;
		height: 70px;
		padding: 0 15px;
	}
	
	.home-pic-base .top-pic {
		width: 140px;
		height: 140px;
		padding: 3px;
		transform: scale(.5);
		transform-origin: 100% 0%;
		background-color: #ffffff;
		border: 1px solid #cccccc;
		float: right;
	}
	
	.home-pic-base .top-name {
		position: absolute;
		left: 20px;
		right: 105px;
		top: 10px;
		font-size: 20px;
		text-align: right;
		color: #ffffff;
		overflow: hidden;
	}
	
	.top-pic-inner {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
	}
	
	.drag-reflash {
		position: absolute;
		left: 20px;
		top: -40px;
		z-index: 2;
		width: 30px;
		height: 30px;
		background: url(../../resource/images/find-album-reflash-icon.png) no-repeat 0 0;
		background-size: contain;
	}
	
	.home-content {
		padding-top: 45px;
		min-height: 500px;
	}
</style>