<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-body">
    <div class="login-pannel">
      <el-card style="max-width: 300px">
        <el-input v-model="username" style="width: 240px; height: 35px" placeholder="请输入账号" />
        <el-input
          v-model="password"
          style="width: 240px"
          type="password"
          placeholder="请输入密码"
          show-password
        />
        <el-input
          v-model="repassword"
          style="width: 240px"
          type="password"
          placeholder="确认密码"
          show-assword
        />
        <el-checkbox v-model="checked1" label="记住我" size="large" />
        <el-button type="primary" style="width: 240px; height: 35px">登录</el-button>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const username = ref('')
const password = ref('')
const repassword = ref('')
const checked1 = ref(true)
// Your script setup code goes here
</script>

<style lang="scss">
.login-body {
  position: absolute;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-image: url(../assets/login.jpg);
}
.login-pannel {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15%;
  box-shadow: 2px 2px 2px #888888;
  //padding-inline: 15px;
  line-height: 10px;
  text-align: center;
  //border-bottom: 10px;
  margin-bottom: 10px;
}
#app {
  padding: 0%;
}
.el-card {
  border-radius: 10%;
  --el-card-border-radius: 10%;
}
.el-input__wrapper {
  padding: 10px;
}
</style>
