<template>
  <div>
    <h1>v-if vs v-show</h1>
    <div>
      <span>사용자의 나이는 <input type="number" v-model="age" /></span><br />
      <!-- TODO: v-if와 v-show를 이용하고 network 탭에서 동작 상태를 확인하시오. -->

      <!-- END-->
      <br />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const errimg = {
  img1: 'https://cdn2.iconfinder.com/data/icons/boxicons-solid-vol-2/24/bxs-message-rounded-error-512.png',
  img2: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-512.png',
}
const age = ref(0)
</script>

<style scoped>
img {
  width: 20px;
}
</style>
