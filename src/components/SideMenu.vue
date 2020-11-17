<template>
  <div class="my-menu">
    <el-menu
      :default-active="pathList[1].children[1].path"
      class="el-menu-vertical-demo"
      background-color="#50e2d5"
      text-color="#fff"
      active-text-color="rgb(126, 189, 255)"
      :unique-opened="true"
    >
      <el-submenu v-for="(subList, subIndex) in pathList" :key="subList.uid" :index="subList.path">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{ subList.name }}</span>
        </template>

        <el-menu-item
          :index="item.path"
          v-for="(item, index) in subList.children"
          :key="item.id"
          @click="handleSelect(subIndex, index)"
        >
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    }
  },
  methods: {
    handleSelect(subIndex, index) {
      this.$router.push(this.getPath(subIndex, index))
      this.$store.dispatch('changePathFun', this.getName(subIndex, index))
    },

    // 获取跳转路由
    getPath(subIndex, index) {
      return (
        this.pathList[subIndex].path +
        this.pathList[subIndex].children[index].path
      )
    },

    // 获取课程名称
    getName(subIndex, index) {
      return (
        this.pathList[subIndex].name +
        '/' +
        this.pathList[subIndex].children[index].name
      )
    },
  },
}
</script>

<style lang="less">
.el-menu {
  width: 280px;
  overflow-x: hidden;
}
</style>