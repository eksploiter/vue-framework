<template>
  <div class="container">
    <h1>멤버 목록</h1>
    <form class="row mb-3" method="get" id="search-form">
      <AppSearch
        :options="options"
        :condition="page.searchCondition"
        @update-condition="updateCondition"
      />
      <input type="hidden" id="currentPage" name="currentPage" value="1" />
    </form>
    <table class="table">
      <tbody>
        <tr>
          <td>no</td>
          <td>name</td>
          <td>email</td>
        </tr>
        <MemberListItem v-for="member in page.list" :member="member" :key="member.no" />
      </tbody>
    </table>
    <AppPagination :page="page" @search="search" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MemberListItem from '@/components/member/MemberListItem.vue'
import AppSearch from '@/components/common/AppSearch.vue'
import AppPagination from '@/components/common/AppPagination.vue'

const options = ref([
  { value: '', label: '검색 항목선택' },
  { value: '1', label: 'name' },
  { value: '2', label: 'email' },
])

const page = ref({
  condition: {
    key: '',
    // word: '001',
    currentPage: 3,
  },
  navSize: 5,
  list: [],
  hasPre: false,
  hasNext: true,
  startPage: 1,
  endPage: 5,
})

for (let i = 0; i < 5; i++) {
  page.value.list.push({ mno: i, name: 'name_' + i, email: `email_${i}.ssafy.com` })
}

const search = (n) => {
  page.value.searchCondition.currentPage = n
  console.log(n + 'page 검색, ', page.value.searchCondition)
}
const updateCondition = (condition) => {
  page.value.searchCondition = { ...condition }
  search(1)
}
</script>

<style scoped></style>
