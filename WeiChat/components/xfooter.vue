<template>
	<div>
		<footer class="app-footer _line-fine" style="" _v-c8294afa="">
			<div class="_effect" _v-c8294afa="">
				<nav _v-26a78bfd="" _v-c8294afa="">
					<a href="#/index/chat">
						<dl _v-26a78bfd="" class="v-link-active"> <dt class="iconfont icon-wechat" _v-26a78bfd=""> <i _v-26a78bfd="" class="_news-count">12</i> </dt>
							<dd _v-26a78bfd="">微信</dd>
						</dl>
					</a>
					<a href="#/index/contact">
						<dl _v-26a78bfd=""> <dt class="iconfont icon-contact" _v-26a78bfd="">  </dt>
							<dd _v-26a78bfd="">通讯录</dd>
						</dl>
					</a>
					<a href="#/index/find">
						<dl _v-26a78bfd=""> <dt class="iconfont icon-find" _v-26a78bfd=""> <i _v-26a78bfd="" class="_news-dot">99</i> </dt>
							<dd _v-26a78bfd="">发现</dd>
						</dl>
					</a>
					<a href="#/index/me">
						<dl _v-26a78bfd=""> <dt class="iconfont icon-me" _v-26a78bfd="">  </dt>
							<dd _v-26a78bfd="">我</dd>
						</dl>
					</a>
				</nav>
			</div>
		</footer>
		<router-view></router-view>
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