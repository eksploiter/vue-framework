<template>
  <div class="container">
    <img :src="`https://httpcats.com/${status}.jpg`" :alt="status" />
  </div>
</template>

<script setup>
defineProps({ status: { type: String, default: '404' } })
</script>

<style scoped>
.container > img {
  width: 100%;
}
</style>
