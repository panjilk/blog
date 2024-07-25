<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { computed } from 'vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
import { useRouter } from 'vue-router'
const Router = useRouter()
</script>
<template>
  <div class="common-layout">
    <el-container class="box">
      <!-- 左侧菜单栏 -->
      <el-aside class="el-aside">
        <h2 class="logoBox">图书出入库管理系统</h2>
        <el-row class="tac">
          <el-col :span="24">
            <!-- <h3 class="mb-2" style="">.</h3> -->
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item index="1" @click="Router.push('/main/mainpage')">
                <el-icon><setting /></el-icon>
                <span>主页</span>
              </el-menu-item>

              <el-menu-item index="2" @click="Router.push('/main/booklist')">
                <el-icon><setting /></el-icon>
                <span>图书管理</span>
              </el-menu-item>
              <el-menu-item index="3" @click="Router.push('/main/category')">
                <el-icon><setting /></el-icon>
                <span>图书分类</span>
              </el-menu-item>
              <el-menu-item index="5" @click="Router.push('/main/inquire')">
                <el-icon><setting /></el-icon>
                <span>查询</span>
              </el-menu-item>
              <el-sub-menu index="4">
                <template #title>
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>个人中心</span>
                </template>
                <el-menu-item index="4-1" @click="Router.push('/main/information')"
                  >基本资料</el-menu-item
                >
                <el-menu-item index="4-2" @click="Router.push('/main/userchange')"
                  >更换头像</el-menu-item
                >
                <el-menu-item index="4-3" @click="Router.push('/main/changepwd')"
                  >修改密码</el-menu-item
                >
              </el-sub-menu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>

      <el-container>
        <!-- header头部菜单 -->
        <el-header class="header"> </el-header>
        <!-- main主体模块：标签页 + 当前路由内容 -->
        <el-main class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
#app {
  max-width: 1780px;
  max-height: 1680px;
  margin: 0 auto;
  padding: 0rem;
  font-weight: normal;
}
.logoBox {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  color: #fff;
}

.box {
  width: 100vw;
  height: 100vh;
}

.header {
  padding: 0;
  height: 58px;
  background-color: #545c64;
}

/* 去除默认的边框样式 */
.el-header .el-menu {
  border-bottom: none;
}

.el-aside .el-menu {
  border-right: none;
}

.el-main {
  background-color: #e9eef3;
}

.el-aside {
  width: 240px;
  background: #545c64;
  padding-top: 58px;
}
</style>
