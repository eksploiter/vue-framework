<template>
  <div>
    <h2>남은 할 일</h2>
    <p>{{ restOfTodos }}</p>
    <p>{{ getRestOfTodos() }}</p>
    <hr />
    <p>{{ restOfTodos }}</p>
    <p>{{ getRestOfTodos() }}</p>
    <hr />
    <!--TODO: 01-1. input을 만들고 todo에 연결해보자. enter를 입력하면 할일이 등록된다.-->

    <!--END-->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const todos = ref([{ text: 'Vue 실습' }, { text: '자격증 공부' }, { text: 'TIL 작성' }])

const restOfTodos = computed(() => {
  console.log('computed 동작')
  return todos.value.length > 0 ? `${todos.value.length} 건 남았다` : '퇴근!'
})

const getRestOfTodos = function () {
  console.log('function 동작')
  return todos.value.length > 0 ? `${todos.value.length} 건 남았다` : '퇴근!'
}

// TODO: 01-2. 01-1을 위한 script를 작성하세요.

// END
</script>

<style lang="scss" scoped></style>
