<template>
  <div>
    <!-- Maintaining State with key -->
    <!--https://ko.vuejs.org/guide/essentials/list#maintaining-state-with-key-->
    <div v-for="item in items" :key="item.id">
      {<input v-model="item.id" type="text" /><input v-model="item.name" type="text" /><input
        type="text"
        placeholder="score"
      />}
    </div>
    <button @click="shift">shift</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let id = 0

const items = ref([
  { id: id++, name: 'Alice' },
  { id: id++, name: 'Bella' },
  { id: id++, name: 'Hong' },
])

const shift = () => {
  const value = items.value
  value.push(value.shift())
}
</script>

<style lang="scss" scoped></style>
