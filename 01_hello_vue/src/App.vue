<script setup>
import { ref, useTemplateRef, onMounted } from 'vue';
const message = ref('1');
console.log(message);
console.log(message.value);

const btn = useTemplateRef('btn');
console.log('btn', btn.value);

onMounted(() => {
  console.log('btn', btn.value);
});
</script>

<template>
  <div id="app">
    {{ message }}
    <button v-on:click="message++" ref="btn">increase</button>
  </div>
</template>

<style scoped></style>
