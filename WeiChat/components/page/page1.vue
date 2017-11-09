<template>
	<div>
  <div class="layout">
    <div class="header">
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <a href="#/index/page1/tab1" class="a-tab"><mu-tab value="tab1" title="Nav One"/></a>
          <a href="#/index/page1/tab2" class="a-tab"><mu-tab value="tab2" title="Nav TwO"/></a>
          <a href="#/index/page1/tab3" class="a-tab"><mu-tab value="tab3" title="Nav Three"/></a>
        </mu-tabs>
      </div>
    </div>
    
  
  </div>
<router-view></router-view>
</div>
</template>
<script>
export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>
<style scoped>
.layout{
  background-color: rgb(236, 236, 236);
}

.header{
  background-color: #7e57c2;
}

.nav{
  display: inline-block;
  width: 100%;
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
}
.a-tab{
	margin:0 20px;
}


.footer{
  padding: 20px 0;
  text-align: center;
}
</style>