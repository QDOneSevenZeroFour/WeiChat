<template>
		<section class="app-content" style="">
			<div class="_full_inner _effect component-find _effect--30">
				<div class="_full component-find-content">
					<div class="weui_cells weui_cells_access">
						<div class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="/static/img/find_icon-circle.9518736.png"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>朋友圈</p>
							</div>
							<div class="weui_cell_ft">
								<div class="find-circle-cell"> </div>
							</div>
						</div>
					</div>
					<div class="weui_cells weui_cells_access">
						<div class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="/static/img/find_icon-qrcode.a3810b5.png"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>扫一扫</p>
							</div>
							<div class="weui_cell_ft">
								<div class="find-circle-cell"> </div>
							</div>
						</div>
						<div class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="/static/img/find_icon-shake.14bfd04.png"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>摇一摇</p>
							</div>
							<div class="weui_cell_ft">
								<div class="find-circle-cell"> </div>
							</div>
						</div>
					</div>
					<div class="weui_cells weui_cells_access">
						<div class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="/static/img/find_icon-bottle.83cf4a8.png"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>漂流瓶</p>
							</div>
							<div class="weui_cell_ft">
								<div class="find-circle-cell"> </div>
							</div>
						</div>
					</div>
					<div class="weui_cells weui_cells_access">
						<div class="weui_cell" href="javascript:;" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div class="weui_cell_hd"><img src="/static/img/find_icon-shopping.27495d6.png"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>购物</p>
							</div>
							<div class="weui_cell_ft">
								<div class="find-circle-cell"> </div>
							</div>
						</div>
						<div class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="/static/img/find_icon-moregame.3536ad6.png"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>游戏</p>
							</div>
							<div class="weui_cell_ft">
								<div class="find-circle-cell"> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="_full_router component-yao-yi-yao cover-transition">
				<div class="_full_inner">
					<div class="_cover-top">
						<a href="#/index/find" style="color:#fff">
							<div class="top-back">
								<div class="_ellipsis iconfont icon-return-arrow v-link-active">返回</div>
							</div>
						</a>
						<div class="top-other">
							<div class="_align-right"> <span class="iconfont"></span> </div>
						</div>
						<div class="top-title _effect">
							<p> <span>摇一摇</span> </p>
						</div>
					</div>
					<div class="_cover-content _effect">
						<div class="yao-yi-yao-panel">
							<div class="mobile-hand"></div>
						</div>
						<ul class="yao-yi-yao-footer">
							<li v-for="item in menu" @click='chooseItem(item.id)' :class="[item.type,{'current':id==item.id}]">
								<div></div>
								<p v-text="item.name"></p>
							</li>
							<!--<li class="music" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div></div>
							<p>歌曲</p>
						</li>
						<li class="tv current" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div></div>
							<p>电视</p>
						</li>-->
						</ul>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
	export default {
		data() {
			return {
				bool: false,
				current: 0,
				id: 1,
				menu: [{
					type: 'people',
					name: '人',
					id: 1
				}, {
					type: 'music',
					name: '歌曲',
					id: 2
				}, {
					type: 'tv',
					name: '电视',
					id: 3
				}]
			}
		},
		methods: {
			chooseItem(id) {
				this.id = id;
			}
		}
	}
</script>

<style scoped>
	._cover-content {
		color: #979797;
		background-color: #2d3031;
	}
	
	.yao-yi-yao-panel {
		height: calc(100% - 90px);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.yao-yi-yao-panel .mobile-hand {
		margin-top: -20%;
		width: 50%;
		padding-top: 50%;
		background-image: url(../../resource/images/yao-yi-yao/mobile-hand.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	}
	
	.yao-yi-yao-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 20px;
		width: 100%;
		left: 0;
	}
	
	.yao-yi-yao-footer li {
		text-align: center;
		padding: 0 20px;
	}
	
	.yao-yi-yao-footer li div {
		width: 40px;
		height: 40px;
		margin-bottom: 5px;
		background-size: contain;
		background-repeat: no-repeat;
	}
	
	.yao-yi-yao-footer li.people div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_people.png);
	}
	
	.yao-yi-yao-footer li.music div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_music.png);
	}
	
	.yao-yi-yao-footer li.tv div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_tv.png);
	}
	
	.yao-yi-yao-footer li.people.current div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_people-hl.png);
	}
	
	.yao-yi-yao-footer li.music.current div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_music-hl.png);
	}
	
	.yao-yi-yao-footer li.tv.current div {
		background-image: url(../../resource/images/yao-yi-yao/shake_icon_tv-hl.png);
	}
</style>