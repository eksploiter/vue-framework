<template>
  <div id="app">
    <h2>사용자 정보</h2>
    <ul>
      <li>name: {{ user.name }}</li>
      <li>age: {{ user.age }}</li>
      <!-- TODO: 2. 투표 가능 여부를 computed로 처리해보자.-->
       <li>can vote?(computed)</li>
    </ul>
    <button @click="user.age++">+</button>
    <button @click="user.age--">-</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
const user = ref({
  name: 'hong gil dong',
  age: 16,
  salary: 100000000,
})

// TODO: 1. user의 age가 18세 이상인지를 판단하여 yes/no로 반환하는 canVote를 computed로 만들어보자.
//  콘솔에 canVote의 값을 출력해보자.

// END

// TODO: 3. user의 salary를 1000단위 구분자와 함께 출력하도록 computed를 구성하고 사용해보자.

// END
</script>

<style lang="scss" scoped></style>
