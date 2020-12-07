<template>
  <div class="navbar">
      <div id="menu" :class="{ active: isActive }">
            <el-menu
  mode="horizontal" @select="handleSelect" :router="true"
      :default-active="activeIndex"
    >
    <el-menu-item index="/home" :route="{name: 'Home'}"> Home </el-menu-item>
    <el-menu-item index="/characters" :route="{name: 'charsView'}"> Characters </el-menu-item>
    <el-menu-item index="/about" :route="{name: 'About'}"> About </el-menu-item>
    </el-menu>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeIndex: '/home',
      isActive: false
    }
  },
  methods: {
      handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    select: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
/* lang="scss"  */
.el-menu-item{
  font-size: 21px;
  font-weight: 100;
  
}
.navbar{
  
  margin:20px
}
</style>