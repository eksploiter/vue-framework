<template>
  <fieldset>
    <h2>하위 component가 slot에 값 공급</h2>
    <slot :text="text" :count="count"></slot>
  </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('greetingMessage')
const count = ref(1)
</script>

<style lang="scss" scoped></style>
