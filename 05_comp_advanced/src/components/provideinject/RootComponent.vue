<template>
  <fieldset>
    <h1>RootComponent</h1>
    <div>global 참조: {{ globalProvide }}</div>
    <input v-model.number="num1" type="number" step="1" />
    <input v-model.number="num2" type="number" step="1" />
    <input v-model.number="num3" type="number" step="1" />
    <br />
    <input v-model.number="even" type="number" step="1" />
    <hr />
    <SubComponentL1 />
  </fieldset>
</template>

<script setup>
import SubComponentL1 from '@/components/provideinject/SubComponentL1.vue'
import { provide, ref, readonly, inject } from 'vue'
// 앱 수준의 provide 참조
const globalProvide = inject('globalPrivide')

const num1 = 100
const num2 = ref(200)
const num3 = ref(100)
// TODO: 01. num1과 num2, num3를 provide 해보자.

// END

// TODO: 04. num3를 readonly로 감싸서 readonlyNum으로 제공해보자.

const even = ref(2)
// TODO: 06. even을 provide 하면서 변경 규칙(짝수인 경우만 효용)을 전달하자.

// END
</script>

<style lang="scss" scoped></style>
