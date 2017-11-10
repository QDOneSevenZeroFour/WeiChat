<template>
	<div>
		<header class="app-header" style="" >
			<div class="_effect _effect--50" >
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
			<div class="_full_router component-sao-yi-sao cover-transition" >
				<div class="_full_inner" >
					<div class="_cover-top"   >
						<a href="#/index/find" style="color:#fff">
						<div class="top-back" >
							<div class="_ellipsis iconfont icon-return-arrow v-link-active" >返回</div>
							
						</div>
						</a>
						<div class="top-other" >
							<div class="_align-right" > <span class="iconfont" ></span> </div>
						</div>
						<div class="top-title _effect" >
							<p > <span >二维码/条码</span> </p>
						</div>
					</div>
					<div class="_cover-content _effect" >
						<div class="sao-yi-sao-panel saoyisao" >
							<div :class="menu[current].type">
								<div class="frame" > 
									<span class="green-line" ></span>
									<span class="left-top" ></span>
									<span class="right-top" ></span>
									<span class="left-bottom" ></span>
									<span class="right-bottom" ></span> </div>
								<div class="desc">
									<p v-text="menu[current].text"></p>
								</div>
							</div>
						</div>
						<ul class="sao-yi-sao-footer" >
							<li v-for="item in menu"  @click='chooseItem(item.id)' :class="[item.type,{'current':id==item.id}]">
								<div ></div>
								<p v-text="item.name"></p>
							</li>
							<!--<li  class="scan-book" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
								<div></div>
								<p >封面</p>
							</li>
							<li class="scan-street" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
								<div ></div>
								<p >街景</p>
							</li>
							<li  class="scan-word" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
								<div ></div>
								<p >翻译</p>
							</li>-->
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				bool: false,
	            current: 0,
	            id:1,
	            menu: [{
	                type: 'scan-qr-code',
	                name: '扫码',
	                title: '二维码/条码',
	                text: '将二维码/条码放入框内,即可自动扫描',
	                id:1
	            }, {
	                type: 'scan-book',
	                name: '封面',
	                title: '封面/电影海报',
	                text: '讲书、CD、电影海报放入框内,即可自动扫描',
	                id:2
	            }, {
	                type: 'scan-street',
	                name: '街景',
	                title: '街景',
	                text: '扫一下周边环境,即可自动扫描',
	                id:3
	            }, {
	                type: 'scan-word',
	                name: '翻译',
	                title: '翻译',
	                text: '将英文单词放入框内',
	                id:4
	            }]
			}
		},
		methods:{
			chooseItem(id){
				this.id = id;
			}
			
		}
	}
</script>

<style scoped>
	.app-content{
		overflow: visible;
	}
	._cover-content {
		color: #979797;
		background-color: #000000;
		height: calc(152% - 45px);
		overflow: visible;
	}
	/**/
	
	.sao-yi-sao-panel {
		height: calc(100% - 90px);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.sao-yi-sao-panel>div {
		width: 100%;
	}
	
	.sao-yi-sao-panel .frame {
		width: 200px;
		height: 200px;
		transform-origin: 50% 50%;
		margin: 0 auto;
		margin-bottom: 15px;
		transition: .5s all ease;
		border: 1px solid #b3b3b3;
		position: relative;
	}
	
	.sao-yi-sao-panel .frame .green-line {
		position: absolute;
		left: 2%;
		top: 2%;
		width: 96%;
		height: 1px;
		background: -webkit-radial-gradient(#72e52d 5%, #54cf21 50%, #0a4a04 80%, #000000 100%);
		box-shadow: 0px 0px 2px rgba(96, 255, 0, .5);
		animation-name: linemove;
		animation-duration: 1500ms;
		animation-delay: 300ms;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		-webkit-animation-name: linemove;
		-webkit-animation-duration: 1500ms;
		-webkit-animation-delay: 300ms;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: linear;
	}
	
	@-webkit-keyframes linemove {
		0% {
			top: 2%;
		}
		100% {
			top: 95%;
			opacity: 1;
		}
	}
	
	@keyframes linemove {
		0% {
			top: 2%;
		}
		100% {
			top: 95%;
			opacity: 1;
		}
	}
	
	.sao-yi-sao-panel .scan-qr-code .frame {
		width: 70%;
		padding-top: 70%;
		height: 0;
	}
	
	.sao-yi-sao-panel .scan-book .frame {
		width: 90%;
		padding-top: 100%;
		height: 0;
	}
	
	.sao-yi-sao-panel .scan-street .frame {
		width: 90%;
		padding-top: 100%;
		height: 0;
	}
	
	.sao-yi-sao-panel .scan-word .frame {
		width: 50%;
		height: 50px;
	}
	
	.sao-yi-sao-panel .frame .left-top {
		position: absolute;
		left: -1px;
		top: -1px;
	}
	
	.sao-yi-sao-panel .frame .left-top::before {
		content: "";
		display: block;
		width: 14px;
		height: 2px;
		background-color: #09bb07;
	}
	
	.sao-yi-sao-panel .frame .left-top::after {
		content: "";
		display: block;
		width: 2px;
		height: 14px;
		background-color: #09bb07;
		margin-left: 0px;
		margin-top: -2px;
	}
	
	.sao-yi-sao-panel .frame .right-top {
		position: absolute;
		right: -1px;
		top: -1px;
	}
	
	.sao-yi-sao-panel .frame .right-top::before {
		content: "";
		display: block;
		width: 14px;
		height: 2px;
		background-color: #09bb07;
	}
	
	.sao-yi-sao-panel .frame .right-top::after {
		content: "";
		float: right;
		display: block;
		width: 2px;
		height: 14px;
		background-color: #09bb07;
		margin-left: 0px;
		margin-top: -2px;
	}
	
	.sao-yi-sao-panel .frame .left-bottom {
		position: absolute;
		left: -1px;
		bottom: -1px;
	}
	
	.sao-yi-sao-panel .frame .left-bottom::before {
		content: "";
		display: block;
		width: 2px;
		height: 14px;
		background-color: #09bb07;
		margin-left: 0px;
		margin-top: -2px;
	}
	
	.sao-yi-sao-panel .frame .left-bottom::after {
		content: "";
		display: block;
		width: 14px;
		height: 2px;
		background-color: #09bb07;
	}
	
	.sao-yi-sao-panel .frame .right-bottom {
		position: absolute;
		right: -1px;
		bottom: -1px;
	}
	
	.sao-yi-sao-panel .frame .right-bottom::before {
		content: "";
		display: block;
		width: 2px;
		height: 14px;
		background-color: #09bb07;
		margin-left: 12px;
	}
	
	.sao-yi-sao-panel .frame .right-bottom::after {
		float: left;
		content: "";
		display: block;
		width: 14px;
		height: 2px;
		background-color: #09bb07;
	}
	/**/
	
	.sao-yi-sao-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 20px;
		width: 100%;
		left: 0;
	}
	
	.sao-yi-sao-footer li {
		text-align: center;
		padding: 0 10px;
	}
	
	.sao-yi-sao-footer li div {
		width: 40px;
		height: 40px;
		margin-bottom: 5px;
		background-size: contain;
		background-repeat: no-repeat;
	}
	
	.sao-yi-sao-footer li.current p {
		color: #09bb07;
	}
	
	.sao-yi-sao-footer li.scan-qr-code div {
		background-image: url(../../resource/images/sao-yi-sao/scan-qr-code.png);
	}
	
	.sao-yi-sao-footer li.scan-qr-code.current div {
		background-image: url(../../resource/images/sao-yi-sao/scan-qr-code_hl.png);
	}
	
	.sao-yi-sao-footer li.scan-book div {
		background-image: url(../../resource/images/sao-yi-sao/scan-book.png);
	}
	
	.sao-yi-sao-footer li.scan-book.current div {
		background-image: url(../../resource/images/sao-yi-sao/scan-book_hl.png);
	}
	
	.sao-yi-sao-footer li.scan-street div {
		background-image: url(../../resource/images/sao-yi-sao/scan-street.png);
	}
	
	.sao-yi-sao-footer li.scan-street.current div {
		background-image: url(../../resource/images/sao-yi-sao/scan-street_hl.png);
	}
	
	.sao-yi-sao-footer li.scan-word div {
		background-image: url(../../resource/images/sao-yi-sao/scan-word.png);
	}
	
	.sao-yi-sao-footer li.scan-word.current div {
		background-image: url(../../resource/images/sao-yi-sao/scan-word_hl.png);
	}
	
	.sao-yi-sao-footer li.scan-word .frame .green-line {
		display: none;
	}
</style>