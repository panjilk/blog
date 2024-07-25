import axios from 'axios'
var data = JSON.stringify({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content: 'You are a helpful assistant.'
    },
    {
      role: 'user',
      content: 'Hello!'
    }
  ]
})

var config = {
  method: 'post',
  url: 'https://api.chatanywhere.tech/v1/chat/completions',
  headers: {
    Authorization: 'Bearer sk-xxxxxxxx',
    'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
    'Content-Type': 'application/json'
  },
  data: data
}

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
