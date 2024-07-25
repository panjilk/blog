<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import router from '@/router'
import { ElMessage, FormRules } from 'element-plus'
// import {FormRules} from 'element-plus';
// import { FormInstance } from 'ant-design-vue';
const loginstate = ref({
  username: '',
  password: ''
})
const formdataref = ref()
// const formdata = reactive({})
// 定义表单校验规则
const rule = reactive<FormRules>({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名长度需在3到10之间', trigger: 'blur' }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const onSubmit = () => {
  formdataref.value.validate((valid) => {
    if (valid) {
      ElMessage.success('登录成功')
      router.push('/home')
    } else {
      ElMessage.error('登录失败')
      return
    }
  })
}

const time = ref(new Date().toLocaleString())
onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleString()
  })
})
function backtologin() {
  router.push('/')
}
</script>

<template>
  <div id="login-all">
    <div id="title">
      <h1>注册</h1>
    </div>
    <div id="login">
      <el-form :model="loginstate" :rules="rule" label-width="auto" style="max-width: 700px">
        <h2>注册页面</h2>

        <el-form-item label="用户名" style="margin-top: 15%" prop="username">
          <el-input v-model="loginstate.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginstate.password" />
        </el-form-item>
        <el-button
          type="primary"
          size="large"
          style="margin-left: 25%; margin-top: 10%"
          @click="onSubmit"
          >注册</el-button
        >
        <el-button
          type="primary"
          size="large"
          style="margin-left: 5%; margin-top: 10%"
          @click="backtologin"
          >返回登录</el-button
        >
      </el-form>
    </div>
    <div id="clock" style="font-size: 30px; position: absolute; top: 75%; left: 20%">
      当前时间：{{ time }}
    </div>
    <!-- <RouterView /> -->
  </div>
</template>

<style scoped>
.el-form {
  height: 350px;
  width: 400px;
  background-color: aliceblue;
  padding: 30px;
  border-radius: 10%;
}
#title {
  font-size: 30px;
  left: 20px;
  position: absolute;
  left: 20%;
  top: 10%;
}
#form {
  line-height: 75px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 0%;
  text-align: center;
}
#login {
  position: absolute;
  top: 20%;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translate(-50%,-50%); */
  /* padding: 20px; */
  border-radius: 0%;
}
.el-card {
  width: 450px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15%;
}
#login-all {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0%;
  left: 0%;
  background-image: linear-gradient(90deg, cyan, purple);
  background-size: 400%;
  animation: myanimation 5s infinite;
}
@keyframes myanimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
