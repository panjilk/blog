import axios from 'axios'
import { ref } from 'vue'
export default function useLogin() {
  const url = ref('http://localhost:8080/findall')
  const getdata = ref()
  async function showusers() {
    try {
      const res = await axios.get(url.value)
      console.log(res.data)
      getdata.value = res.data
    } catch (err) {
      console.log(err)
    }
  }
  return { getdata, showusers }
}
