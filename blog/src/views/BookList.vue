<!-- <el-table :data="reactiveBook.books" border style="width: 100%">
    <el-table-column label="书本编号" prop="id" />
    <el-table-column label="书名" prop="title" />
    <el-table-column label="作者" prop="author" />
    <el-table-column label="出版社" prop="publisher" />
    <el-table-column label="ISBN" prop="isbn" />
    <el-table-column label="CategoryId" prop="categoryid" />
    <el-table-column label="Year" prop="year" />
    <el-table-column label="Price" prop="price" />
  </el-table>
   -->
<template>
  <el-table :data="reactiveBook.books" style="width: 100%">
    <el-table-column label="书本编号" prop="id" />
    <el-table-column label="书名" prop="title" />
    <el-table-column label="作者" prop="author" />
    <el-table-column label="出版社" prop="publisher" />
    <el-table-column label="ISBN" prop="isbn" />
    <el-table-column label="CategoryId" prop="categoryid" />
    <el-table-column label="Year" prop="year" />
    <el-table-column label="Price" prop="price" />
    <!-- 使用具名slot "append" 添加操作按钮 -->
    <el-table-column label="操作">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleClick(scope.row)">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination :page-size="5" :pager-count="11" layout="prev, pager, next" :total="total" />
</template>

<script lang="js" setup>
import { reactive, onMounted, ref } from 'vue'
import axios from 'axios'
let total = ref(0)

const reactiveBook = reactive({
  books: []
})
// const search = ref('')
// books.value = res.value
// console.log(books.value)
onMounted(async () => {
  var config = {
    method: 'get',
    url: 'http://localhost:8080/page?pageNum=1&pageSize=2',
    headers: {
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
      Accept: '*/*',
      Host: 'localhost:8080',
      Connection: 'keep-alive'
    }
  }

  total.value = (await axios(config)).data.data.total
  reactiveBook.books = (await axios(config)).data.data.data
  console.log(reactiveBook.books)
  console.log(total.value)
})
</script>
