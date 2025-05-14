<template>
  <div>
    <fieldset>
      <h2>PropChild</h2>
      <ul>
        <li>{{ myMsg }}</li>
        <li>{{ dynamicProps }}</li>
        <li><input type="text" v-model="data" /> <button @click="toParent">부모님께</button></li>
      </ul>
    </fieldset>
  </div>
</template>

<script setup>
//defineProps(['myMsg'])
import { ref } from 'vue'
const props = defineProps({
  //myMsg: Boolean,
  //vue.js?v=2182ba9f:2116 [Vue warn]: Invalid prop: type check failed for prop "myMsg". Expected Boolean, got String with value "msg".
  //at <PropChild myMsg="msg" >
  //at <PropParent >
  //at <App>
  myMsg: String,
  dynamicProps: String,
})

console.log(props)
console.log(props.myMsg) // reactive 형태의 Proxy .value 없음

const emit = defineEmits(['present'])
const data = ref('')
const toParent = () => {
  console.log('PropChild 이벤트 발생')
  emit('present', data.value)
}
</script>

<style scoped></style>
