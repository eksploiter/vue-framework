<template>
  <div>
    <fieldset>
      <h2>MyComponentItem</h2>
    </fieldset>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
console.log('my component item')

onMounted(() => {
  console.log('mounted')
})
</script>

<style scoped></style>
