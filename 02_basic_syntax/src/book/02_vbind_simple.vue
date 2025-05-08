<template>
  <div>
    <img :src="imageSrc" /><br />
    <a :href="myUrl">Move to url</a>
    <p :[dynamicAttr]="dynamicValue">Dynamic Attr</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const imageSrc = ref('https://picsum.photos/200');
const myUrl = ref('https://www.google.co.kr/');
const dynamicAttr = ref('title');
const dynamicValue = ref('Hello Vue.js');
</script>

<style lang="scss" scoped></style>
