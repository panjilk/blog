<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container class="welcome-container">
    <el-header class="header">
      <el-row>
        <el-col :span="24">
          <h1>欢迎来到图书出入库管理系统</h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main">
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-card>
            <h2>系统功能</h2>
            <p>在这里，你可以管理图书的出入库，查看图书的库存情况，以及添加或删除图书信息。</p>
            <el-button
              type="primary"
              @click="navigateTo('main/booklist')"
              style="margin-right: 10px"
              >进入图书管理</el-button
            >
            <el-button type="info" @click="navigateTo('main/information')">查看个人信息</el-button>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="footer"> &copy; 2023 图书出入库管理系统 </el-footer>
  </el-container>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const navigateTo = (path) => {
      router.push(`/${path}`)
    }

    return {
      navigateTo
    }
  }
}
</script>

<style scoped>
.welcome-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #409eff;
  color: white;
  text-align: center;
  padding: 20px 0;
}

.main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  text-align: center;
  padding: 10px 0;
  background-color: #f2f2f2;
}
</style>
