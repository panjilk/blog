<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-table :data="category.inner" style="width: 100%">
    <el-table-column label="id" prop="categoryid" />
    <el-table-column label="类名" prop="name" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="js" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import axios from 'axios'

const category = reactive({
  inner: []
})
onMounted(async () => {
  var config = {
    method: 'get',
    url: 'http://localhost:8080/category',
    headers: {
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
      Accept: '*/*',
      Host: 'localhost:8080',
      Connection: 'keep-alive'
    }
  }
  category.inner = (await axios(config)).data.data
  console.log(category.inner)
})

// interface User {
//   id: number
//   name: string
// }
const search = ref('')
// const filterTableData = computed(() =>
//   category.inner.filter(
//     (data) =>
//       !search.value ||
//       data.name.toLowerCase().includes(search.value.toLowerCase())
//   )
// )
// const handleEdit = (id: number, row: User) => {
//   console.log(id, row)
// }
// const handleDelete = (id: number, row: User) => {
//   console.log(id, row)
// }
</script>
