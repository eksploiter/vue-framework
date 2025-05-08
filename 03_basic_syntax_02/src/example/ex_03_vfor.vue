<template>
  <div id="app">
    <button @click="arr.push(Math.random())">push</button>
    <button @click="randomSplice">splice</button>
    <hr />
    <ul>
      <!--TODO: index와 item으로 key를 바인딩하면서 dom의 재활용에 대해서 살펴보자.-->
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const arr = ref([])
const randomSplice = () => {
  const target = parseInt(Math.random() * arr.value.length)
  console.log('삭제: ', target)
  arr.value.splice(target, 1)
}
</script>

<style lang="scss" scoped></style>
