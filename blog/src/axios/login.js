import router from '@/router'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export default function () {
  async function login(username, password) {
    const url = ref('http://localhost:8080/login')
    try {
      const res = await axios.post(
        url.value,
        {
          username: username,
          password: password
        },
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )

      console.log(res)
      console.log(username)
      console.log(password)

      if (res.data.code == 1) {
        ElMessage('账号或密码错误')
      } else if (res.data.code == 0) {
        ElMessage('登陆成功')
        router.push('/main')
      }
    } catch (err) {
      console.log(err)
      ElMessage('账号连接失败')
    }
  }
  return { login }
}
