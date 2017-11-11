<template>
	<div>
	<header class="app-header" style="" >
		<div class="_effect" >
			<div class="_cover-top"   style="overflow:visible">
				<div class="other" > <span class="iconfont icon-tips-jia"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: none;"></span> <span class="iconfont icon-tips-add-friend"  style=""></span>
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
				<div class="center" > 通讯录 <span class="parentheses"  style="display: none;">12</span> </div>
			</div>
		</div>
	</header>

	<section class="app-content" style="" >
		<div class="_full_inner _effect component-contact" >
			<div class="weui_search_bar" >
				<form class="weui_search_outer">
					<div class="weui_search_inner"> <i class="weui_icon_search"></i> <input type="search" class="weui_search_input" placeholder="搜索" id="">
						<a href="javascript:" class="weui_icon_clear" style="display: none;"></a>
					</div> <label class="weui_search_text" for=""> <i class="weui_icon_search"></i> <span>搜索</span> </label> </form>
				<a href="javascript:" class="weui_search_cancel">取消</a>
			</div>
			<div class="weui_cells_contact-head weui_cells weui_cells_access" style="margin-top:-1px" >
				<a class="weui_cell" href="#!/contact/new-friends" >
					<div class="weui_cell_hd" > <img class="img-obj-cover" src="../resource/images/contact_top-friend-notify.f6191d2.png" > </div>
					<div class="weui_cell_bd weui_cell_primary" >
						<p >新的朋友</p>
					</div>
				</a>
				<a class="weui_cell" href="#!/contact/group-chat" >
					<div class="weui_cell_hd" > <img class="img-obj-cover" src="../resource/images/contact_top-addgroup.5d99a15.png" > </div>
					<div class="weui_cell_bd weui_cell_primary" >
						<p >群聊</p>
					</div>
				</a>
				<a class="weui_cell" href="#!/contact/new-friends" >
					<div class="weui_cell_hd" > <img class="img-obj-cover" src="../resource/images/contact_top-tag.7218970.png" > </div>
					<div class="weui_cell_bd weui_cell_primary" >
						<p >标签</p>
					</div>
				</a>
				<a class="weui_cell" href="#!/contact/new-friends" >
					<div class="weui_cell_hd" ><img class="img-obj-cover" src="../resource/images/contact_top-offical.cc0e620.png" ></div>
					<div class="weui_cell_bd weui_cell_primary" >
						<p >公众号</p>
					</div>
				</a>
			</div>
			<div class="contact-friends" >
				<p class="contact-alpha" >A</p>
				<div class="weui_cells weui_cells_access" >
					<div class="weui_cell"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div class="weui_cell_hd" > <img  src="//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg"></div>
						<div class="weui_cell_bd weui_cell_primary" >
							<p >阿涛</p>
						</div>
					</div>
				</div>
				<p class="contact-alpha" >B</p>
				<div class="weui_cells weui_cells_access" >
					<div class="weui_cell"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div class="weui_cell_hd" > <img  src="//ad-gold-cdn.xitu.io/1499914019068553d2c25d0b33b83481795c552e0b47f.jpg"></div>
						<div class="weui_cell_bd weui_cell_primary" >
							<p >白加黑</p>
						</div>
					</div>
				</div>
				<p class="contact-alpha" >X</p>
				<div class="weui_cells weui_cells_access" >
					<div class="weui_cell"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div class="weui_cell_hd" > <img  src="//ad-gold-cdn.xitu.io/1499913563353063825fa09e5e83359a90c91417e029e.jpg"></div>
						<div class="weui_cell_bd weui_cell_primary" >
							<p >小明</p>
						</div>
					</div>
					<div class="weui_cell"  style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
						<div class="weui_cell_hd" > <img  src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg"></div>
						<div class="weui_cell_bd weui_cell_primary" >
							<p >小亮</p>
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