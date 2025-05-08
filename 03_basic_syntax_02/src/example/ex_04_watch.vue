<template>
  <div>
    <h1>watch 소스 타입</h1>
    <div>{{ x }}, {{ y }}</div>
    <button @click="x++">x++</button><button @click="y++">y++</button>
    <h1>깊은 감시자</h1>
    <div>{{ obj.count }}</div>
    <button @click="obj.count++">obj.count++</button>
    <h1>watchEffect</h1>
    <div>{{ data }}</div>
    <button @click="todoId++">todoId++</button>
    <div>{{ arr }}</div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect, reactive } from 'vue'
const x = ref(0)
const y = ref(0)

/** Watch 소스 타입 */
// 단일 ref
watch(x, (newX) => {
  console.log(`x는 ${newX}입니다`)
})

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`x와 y의 합은: ${sum}입니다`)
  },
)

// 여러 소스의 배열
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x는 ${newX}이고 y는 ${newY}입니다`)
})
/** 깊은 감시자 */
const obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {
  // 중첩된 속성 변경 시 실행됩니다
  // 참고: `newValue`는 여기서 `oldValue`와 동일합니다.
  // 두 값 모두 동일한 객체를 가리키기 때문입니다!
  console.log('깊은 감시자 1: ', obj, newValue, oldValue)
})

watch(
  () => obj,
  (newValue, oldValue) => {
    console.log('깊은 감시자 2: ', obj, newValue, oldValue)
  },
  {
    //deep: true,
  },
)

/** watchEffect */
const todoId = ref(1)
const data = ref({})
watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  data.value = await response.json()
})

/** callback flush timing */
const arr = ref([])

watchEffect(
  () => {
    console.log('배열의 길이: ', arr.value.length)
  },
  {
    //flush: 'post', // DOM 업데이트 후에 반영()
  },
)

for (let i = 0; i < 100; i++) {
  arr.value.push(i)
}
</script>

<style scoped></style>
