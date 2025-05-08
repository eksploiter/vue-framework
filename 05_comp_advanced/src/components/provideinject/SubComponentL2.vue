<template>
  <fieldset>
    <h1>level 2 child</h1>
    <input v-model.number="num1" type="number" step="1" />
    <input v-model.number="num2" type="number" step="1" />
    <input v-model.number="readonlyNum" type="number" step="1" />
    <br />
    <input :value="even" type="number" step="1" @change="modifyEven($event.target.value)" />
  </fieldset>
</template>

<script setup>
import { inject } from 'vue'

// TODO: 03. num1과 num2를 inject 해보고 각 컴포넌트들에서 값을 변경해보자.

// END

// TODO: 05. readonlyNum을 import 해보자.
// TODO: 07. even으로 provide된 것들을 사용해보자.
</script>

<style lang="scss" scoped></style>
