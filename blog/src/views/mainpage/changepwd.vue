<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>修改用户密码</h1>
    <form @submit.prevent="resetPassword">
      <div>
        <label for="current-password">当前密码:</label>
        <input type="password" id="current-password" v-model="currentPassword" required />
      </div>
      <div>
        <label for="new-password">新密码:</label>
        <input type="password" id="new-password" v-model="newPassword" required />
      </div>
      <div>
        <label for="confirm-password">确认新密码:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required />
      </div>
      <button type="submit">修改密码</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <p v-if="success">{{ success }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const currentPassword = ref('')
    const newPassword = ref('')
    const confirmPassword = ref('')
    const error = ref('')
    const success = ref('')

    const resetPassword = async () => {
      // 清除上一次的错误和成功消息
      error.value = ''
      success.value = ''

      // 基本验证
      if (newPassword.value !== confirmPassword.value) {
        error.value = '新密码和确认新密码不匹配'
        return
      }

      try {
        // 假设我们通过一个API来进行密码重置
        const response = await axios.post('/api/reset-password', {
          currentPassword: currentPassword.value,
          newPassword: newPassword.value
        })

        if (response.data.success) {
          success.value = '密码重置成功'
        } else {
          error.value = '密码重置失败，请检查当前密码是否正确'
        }
      } catch (err) {
        error.value = '发生错误：' + err.message
      }
    }

    return {
      currentPassword,
      newPassword,
      confirmPassword,
      resetPassword,
      error,
      success
    }
  }
}
</script>
