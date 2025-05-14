<template>
  <div>
    <fieldset>
      <h2>MyComponent</h2>
      <MyComponentItem />
      <MyComponentItem />
      <MyComponentItem />
    </fieldset>
  </div>
</template>

<script setup>
import MyComponentItem from '@/components/MyComponentItem.vue'
</script>

<style scoped>
div {
  color: blue;
}
</style>
