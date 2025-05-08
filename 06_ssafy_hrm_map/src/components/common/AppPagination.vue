<template>
  <nav class="d-flex justify-content-center">
    <ul class="pagination">
      <!-- 이전 버튼 -->
      <li class="page-item" v-if="page.hasPre">
        <a class="page-link" href="#" @click.prevent="changePage(page.startPage - 1)">이전</a>
      </li>

      <!-- 페이지 번호 -->
      <li
        class="page-item"
        :class="{ active: page.condition.currentPage == i }"
        v-for="i in pageLen"
        :key="i"
      >
        <a class="page-link" @click.prevent="changePage(i + page.startPage - 1)">{{
          i + page.startPage - 1
        }}</a>
      </li>

      <!-- 다음 버튼 -->
      <li class="page-item" v-if="page.hasNext">
        <a class="page-link" href="#" @click.prevent="changePage(page.endPage + 1)">다음</a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({ page: Object })
const emit = defineEmits(['changePage'])
const changePage = (n) => {
  console.log('change page', n)
  emit('changePage', n)
}
const pageLen = computed(() => {
  const len = props.page.endPage - props.page.startPage + 1
  return len > 0 ? len : 0
})
</script>

<style lang="scss" scoped></style>
