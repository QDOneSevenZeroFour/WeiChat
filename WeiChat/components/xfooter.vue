<template>
	<div>
		<router-view></router-view>
		<footer class="app-footer _line-fine" style="" >
			<div class="_effect" >
				<nav  >
					<a href="#/index/xheader/chat">
						<dl  class="v-link-active"> <dt class="iconfont icon-wechat" > <i  class="_news-count">12</i> </dt>
							<dd >微信</dd>
						</dl>
					</a>
					<a href="#/index/contact">
						<dl > <dt class="iconfont icon-contact" >  </dt>
							<dd >通讯录</dd>
						</dl>
					</a>
					<a href="#/index/find">
						<dl > <dt class="iconfont icon-find" > <i  class="_news-dot">99</i> </dt>
							<dd >发现</dd>
						</dl>
					</a>
					<a href="#/index/me">
						<dl > <dt class="iconfont icon-me" >  </dt>
							<dd >我</dd>
						</dl>
					</a>
				</nav>
			</div>
		</footer>
	</div>
</template>

<script>
</script>

<style scoped>
	.app-footer {
		bottom: 0;
		left: 0;
		width: 100%;
		position: absolute;
		z-index: 3;
	}
	
	.app-footer a {
		display: inline-block;
		margin: 0 33px;
	}
</style>