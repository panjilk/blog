import axios from 'axios'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const url = ref('http://localhost:8080/findall')
let res
export default function () {
  var config = {
    method: 'get',
    url: 'http://localhost:8080/findbooks',
    headers: {
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
      Accept: '*/*',
      Host: 'localhost:8080',
      Connection: 'keep-alive'
    }
  }
  function Getbooklist() {
    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data))
        res = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return { Getbooklist, res }
}
