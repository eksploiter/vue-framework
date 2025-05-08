<template>
  <fieldset>
    <h1>level 1 child</h1>
    <input v-model.number="num1" type="number" step="1" />
    <input v-model.number="num2" type="number" step="1" />
    <input v-model.number="num3" type="number" step="1" />
    <hr />
    <SubComponentL2 />
  </fieldset>
</template>

<script setup>
import SubComponentL2 from './SubComponentL2.vue'
import { inject, provide } from 'vue'
// TODO: 02. num1과 num2, num3를 inject 해보자.

// END

// 동일하게 다시 provide 하면 재정의 하위 자식들에게는 재정의됨.
provide('num1', 1000)
</script>

<style lang="scss" scoped></style>
