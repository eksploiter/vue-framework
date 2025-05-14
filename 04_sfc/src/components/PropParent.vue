<template>
  <div>
    <fieldset>
      <h2>PropParent</h2>
      <PropChild myMsg="msg" :dynamicProps="name" @present="receive" />
      <div v-if="fromChild">아 글쎄.. 우리 자식이.. {{ fromChild }}</div>
    </fieldset>
  </div>
</template>

<script setup>
import PropChild from '@/components/PropChild.vue'
import { ref } from 'vue'
const name = ref('hong')
const fromChild = ref('')
const receive = (present) => {
  console.log('잘 받음')
  fromChild.value = present
}
</script>

<style scoped></style>
