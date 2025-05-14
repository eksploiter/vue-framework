<template>
  <div>
    <fieldset>
      <h2>App</h2>
      <MyComponent />
      <hr />
      <PropParent />
    </fieldset>
  </div>
</template>

<script setup>
import MyComponent from '@/components/MyComponent.vue'
import PropParent from '@/components/PropParent.vue'
</script>

<style scoped>
div {
  color: red;
}
</style>
