<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container>
    <el-header class="header">
      <el-row justify="space-between">
        <el-col>
          <h1>图书出入库查询</h1>
        </el-col>
        <el-col>
          <el-input
            v-model="searchQuery"
            placeholder="输入书籍ID或名称"
            clearable
            @clear="fetchTransactions"
          >
            <template v-slot:append>
              <el-button @click="fetchTransactions">搜索</el-button>
            </template>
          </el-input>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-table :data="transactions.data" border style="width: 100%">
        <el-table-column prop="inventoryid" label="交易ID" width="100"></el-table-column>
        <el-table-column prop="bookid" label="书籍ID" width="100"></el-table-column>
        <el-table-column prop="transactiontime" label="处理时间" width="150"></el-table-column>
        <el-table-column prop="type" label="交易类型" width="150">
          <template v-slot="scope">
            <el-tag :type="scope.row.type === '1' ? 'success' : 'danger'">
              {{ scope.row.type === '1' ? '入库' : '出库' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="quantity" label="数量" width="100"></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    // 定义组件状态
    const transactions = ref([])
    const searchQuery = ref('')

    // 获取交易数据的函数
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/transactions', {
          params: {}
        })
        transactions.value = response.data
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    // 在组件挂载时获取交易数据
    onMounted(fetchTransactions)

    return {
      transactions,
      searchQuery,
      fetchTransactions
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #409eff;
  color: white;
  text-align: center;
  padding: 20px 0;
}
</style>
