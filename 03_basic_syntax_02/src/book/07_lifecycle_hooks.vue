<template>
  <div>
    <button @click="count++">Add 1</button>
    <p>Count: {{ count }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'
const count = ref(0)
const message = ref(null)

onMounted(() => {
  console.log('mounted')
})

onUpdated(() => {
  console.log('updated')
})
</script>

<style lang="scss" scoped></style>
