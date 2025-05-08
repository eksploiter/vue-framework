<template>
  <div>
    <button @click="getCatImage">냥냥펀치</button>
    <hr />
    <img ref="img" />
  </div>
</template>

<script setup>
import { onMounted, useTemplateRef } from 'vue'
import logo from '@/assets/logo.svg'
const img = useTemplateRef('img')

const setLogo = async (no) => {
  console.log(no, 'setLogo called ', logo)
  try {
    img.value.src = logo
  } catch (e) {
    console.log(e, no)
  }
}

// mounted 시점에 속성 사용하기
onMounted(async () => {
  console.log('3. mounted: before ', img.value)
  setLogo(4)
})

console.log('1 setup', img.value)
setLogo(2)
</script>

<style lang="scss" scoped></style>
