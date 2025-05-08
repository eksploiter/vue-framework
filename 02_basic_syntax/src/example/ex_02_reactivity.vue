<template>
  <div>
    <!-- TODO: 02. 버튼을 클릭하면서 반응성을 확인하시오.-->
    <button @click="nState.count++">일반형, 화면 갱신 X: {{ nState }}</button><br />
    <button @click="rState.count++">반응형: 화면 갱신 O: {{ rState }}</button><br />
    <button @click="rState.user.age++">깊은 반응성</button><br />
    <button @click="destate++">분해할당된 값: {{ destate }}</button><br />

    <button @click="arr.push('1')">{{ arr }}</button><br />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const msg = ref('Hello');
const nState = { count: 10, user: { age: 10 } };
const rState = reactive(nState);
const arr = reactive(['Hello', 'Reactive']);

console.log(msg.value); // ref는 getValue/setValue로 관리
console.log(rState.count); // reactive는 proxy로 관리

// 분해해서 가져가면(ref도 동일)
const destate = rState.count; // 기본형은 반응성이 없어짐
const deuser = rState.user; // 객체는 여전히 proxy
console.log(destate, deuser);

// TODO: 01. 위에서 선언한 상수의 타입을 확인하시오.
console.log('일반 객체:', nState);
console.log('반응형 객체:', rState);
console.log('할당된 값: ', destate, deuser);
console.log('배열: ', arr);
</script>

<style scoped></style>
