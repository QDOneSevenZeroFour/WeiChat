<template>
	<div>
		<header class="app-header" style=""  >
			<div class="_effect" >
				<div class="_cover-top"   style="overflow:visible">
					<div class="other" > <span class="iconfont icon-tips-jia"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: none;"></span> <span class="iconfont icon-tips-add-friend"  style="display: none;"></span>
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
					<div class="center" > 发现 <span class="parentheses"  style="display: none;">12</span> </div>
				</div>
			</div>
		</header>

		<section class="app-content" style="" >
			<div class="_full_inner _effect component-find" >
				<div class="_full component-find-content" >

					<div class="weui_cells weui_cells_access" >
						<a href="#/friends">
							<div class="weui_cell" href="javascript:;" >
								<div class="weui_cell_hd" ><img src="../resource/images/find_icon-circle.9518736.png" ></div>
								<div class="weui_cell_bd weui_cell_primary" >
									<p >朋友圈</p>
								</div>
								<div class="weui_cell_ft" >
									<div class="find-circle-cell" > </div>
								</div>
							</div>
						</a>
					</div>

					<div class="weui_cells weui_cells_access" >
						<a href="#/saoyisao">
							<div class="weui_cell aa" href="javascript:;" >
								<div class="weui_cell_hd" ><img src="../resource/images/find_icon-qrcode.a3810b5.png" ></div>
								<div class="weui_cell_bd weui_cell_primary" >
									<p >扫一扫</p>
								</div>
								<div class="weui_cell_ft" >
									<div class="find-circle-cell" > </div>
								</div>
							</div>
						</a>
						<a href="#/yaoyiyao">
							<div class="weui_cell" href="javascript:;" >
								<div class="weui_cell_hd" ><img src="../resource/images/find_icon-shake.14bfd04.png" ></div>
								<div class="weui_cell_bd weui_cell_primary" >
									<p >摇一摇</p>
								</div>
								<div class="weui_cell_ft" >
									<div class="find-circle-cell" > </div>
								</div>
							</div>
						</a>
					</div>
					<div class="weui_cells weui_cells_access" >
						<a href="#/driftBottle">
							<div class="weui_cell" href="javascript:;" >
								<div class="weui_cell_hd" ><img src="../resource/images/find_icon-bottle.83cf4a8.png" ></div>
								<div class="weui_cell_bd weui_cell_primary" >
									<p >漂流瓶</p>
								</div>
								<div class="weui_cell_ft" >
									<div class="find-circle-cell" > </div>
								</div>
							</div>
						</a>
					</div>
					<div class="weui_cells weui_cells_access" >
						<div class="weui_cell" href="javascript:;"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
							<div class="weui_cell_hd" ><img src="../resource/images/find_icon-shopping.27495d6.png" ></div>
							<div class="weui_cell_bd weui_cell_primary" >
								<p >购物</p>
							</div>
							<div class="weui_cell_ft" >
								<div class="find-circle-cell" > </div>
							</div>
						</div>
						<div class="weui_cell" href="javascript:;" >
							<div class="weui_cell_hd" ><img src="../resource/images/find_icon-moregame.3536ad6.png" ></div>
							<div class="weui_cell_bd weui_cell_primary" >
								<p >游戏</p>
							</div>
							<div class="weui_cell_ft" >
								<div class="find-circle-cell" > </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.weui_cells a {
		color: #000;
		display: block;
	}
	
	.weui_cells .aa:after{
		content: " ";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		border-bottom: 1px solid #d9d9d9;
		color: #d9d9d9;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		left: 15px;
	}
</style>