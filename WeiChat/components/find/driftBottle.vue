<template>
		<section class="app-content" style="">
			<div class="_full_inner _effect component-find _effect--30">
				<div class="_full component-find-content">
					<div class="weui_cells weui_cells_access">
						<div class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="../../resource/images/find_icon-circle.9518736.png"></div>
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
							<div class="weui_cell_hd"><img src="../../resource/images/find_icon-qrcode.a3810b5.png"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>扫一扫</p>
							</div>
							<div class="weui_cell_ft">
								<div class="find-circle-cell"> </div>
							</div>
						</div>
						<div class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="../../resource/images/find_icon-shake.14bfd04.png"></div>
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
							<div class="weui_cell_hd"><img src="../../resource/images/find_icon-bottle.83cf4a8.png"></div>
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
							<div class="weui_cell_hd"><img src="../../resource/images/find_icon-shopping.27495d6.png"></div>
							<div class="weui_cell_bd weui_cell_primary">
								<p>购物</p>
							</div>
							<div class="weui_cell_ft">
								<div class="find-circle-cell"> </div>
							</div>
						</div>
						<div class="weui_cell" href="javascript:;">
							<div class="weui_cell_hd"><img src="../../resource/images/find_icon-moregame.3536ad6.png"></div>
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
			<div class="_full_router component-drift-bottle cover-transition">
				<div class="_full_inner">
					<div class="_cover-top">
						<a href="#/index/find" style="color:#fff">
							<div class="top-back">
								<div class="_ellipsis iconfont icon-return-arrow v-link-active">发现</div>
							</div>
						</a>
						<div class="top-other">
							<div class="_align-right"> <span class="iconfont"></span> </div>
						</div>
						<div class="top-title _effect">
							<p> <span>漂流瓶</span> </p>
						</div>
					</div>
					<div class="_cover-content _effect">
						<div class="drift-bottle-panel">
							<div class="mobile-hand"></div>
						</div>
						<ul class="drift-bottle-footer">
							<li class="throw" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
								<div></div>
								<p>扔一个</p>
							</li>
							<li class="pickup" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
								<div></div>
								<p>捡一个</p>
							</li>
							<li class="bottle current" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
								<div></div>
								<p>我的瓶子</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
</script>

<style scoped>
	._cover-content {
		color: #979797;
		background-image: url(../../resource/images/drift-bottle/bottle-bkg.jpg);
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	
	.drift-bottle-panel {
		height: calc(100% - 90px);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.drift-bottle-footer {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		bottom: 0px;
		width: 100%;
		left: 0;
		color: #ffffff;
		background-image: url(../../resource/images/drift-bottle/bottle-board.png);
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center bottom;
	}
	
	.drift-bottle-footer li {
		text-align: center;
	}
	
	.drift-bottle-footer li div {
		width: 70px;
		height: 70px;
		margin: 0 auto;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
	}
	
	.drift-bottle-footer li.throw div {
		background-image: url(../../resource/images/drift-bottle/bottle-button-throw.png);
	}
	
	.drift-bottle-footer li.pickup div {
		background-image: url(../../resource/images/drift-bottle/bottle-button-fish.png);
	}
	
	.drift-bottle-footer li.bottle div {
		background-image: url(../../resource/images/drift-bottle/bottle-button-mine.png);
	}
</style>