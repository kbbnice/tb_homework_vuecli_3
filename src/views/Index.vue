<template>
  <div class="home">
    <el-container>
      <el-aside width="280px">
        <el-menu
          default-active="/"
          class="el-menu-vertical-demo"
          background-color="#50e2d5"
          text-color="#444"
          active-text-color="#ccfff6"
          :unique-opened="true"
          :router="true"
        >
          <el-menu-item index="/">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{ "首页" }}</span>
            </template>
          </el-menu-item>
          <el-submenu index="/self">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{ "个人中心" }}</span>
            </template>

            <el-menu-item index="/self/mymovie">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ "我的电影" }}</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/self/about">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ "关于我们" }}</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/self/pwd">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ "修改密码" }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/login">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ "退出登录" }}</span>
              </template>
            </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="right">影视首发资讯</div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>&copy;copyrght 版权所有</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {
  Container,
  Aside,
  Main,
  Header,
  Footer,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
} from "element-ui";

export default {
  name: "Home",
  data() {
    return {
      activePath: "1",
    };
  },
  components: {
    [Container.name]: Container,
    [Aside.name]: Aside,
    [Main.name]: Main,
    [Header.name]: Header,
    [Footer.name]: Footer,
    [MenuItemGroup.name]: MenuItemGroup,
    [MenuItem.name]: MenuItem,
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
  },
  methods: {},
  created() {},
};
</script>

<style lang="less" scoped>
.el-header {
  color: #333;
  line-height: 60px;
  position: fixed;
  left: 280px;
  right: 0;
  top: 0;
  height: 60px;
  // border-bottom: 1px solid #ccc;
  background: #50e2d5;
  .right {
    text-align: right;
    font-size: 30px;
    color: #187d6b;
  }
}

.el-aside {
  color: #333;
  text-align: left;
  position: fixed;
  left: 0;
  width: 280px;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #50e2d5;
}

.el-main {
  color: #333;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 280px;
  right: 0;
}
.el-footer {
  position: fixed;
  bottom: 0;
  left: 280px;
  right: 0;
  height: 60px;
  background-color: #999;
  text-align: center;
  color: #444;
  font-size: 12px;
  line-height: 60px;
}
</style>
