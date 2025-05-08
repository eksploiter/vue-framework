<template>
  <div>
    <p>{{ inputText1 }}</p>
    <input :value="inputText1" @input="onInput" />

    <p>{{ inputText2 }}</p>
    <input v-model="inputText2" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const inputText1 = ref('')
const inputText2 = ref('')
const onInput = function (event) {
  inputText1.value = event.target.value
}
</script>

<style lang="scss" scoped></style>
