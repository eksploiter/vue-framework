<script setup>
import { reactive, watch } from 'vue'
const depts = reactive([{ deptno: 10, dname: '개발1팀', loc: '서울' }])
const props = defineProps(['dept'])
// 부모와 자식 간의 관계, props와 defineProps에 대해 더 자세히 공부
// 이것의 변화가 생겼을 때 watcher를 사용한다. computed와 watcher의 차이점도 잘 알아두자
const emit = defineEmits(['changeMode'])
const pick = (index) => {
  emit('changeMode', { mode: 'detail', data: depts[index] })
}
const changeForm = () => {
  emit('changeMode', { mode: 'register' })
}
watch(props.dept, (newVal, oldVal) => {
  console.log(`watch props.dept ${oldVal} -> ${newVal}`)
  const idx = depts.findIndex((d) => d.deptno == newVal.deptno)
  if (idx == -1) {
    depts.push({ ...newVal })
  } else {
    depts[idx].dname = newVal.dname
    depts[idx].loc = newVal.loc
  }
})
</script>

<template>
  <div class="container">
    <div class="row mt-3">
      <h2 class="bg-primary text-light text-center">부서 목록</h2>
    </div>
    <div class="row">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>부서번호</th>
            <th>부서이름</th>
            <th>위치</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="depts.length == 0">
            <td colspan="4">등록된 사용자 정보가 없습니다.</td>
          </tr>
          <template v-else>
            <tr v-for="(dept, index) in depts" :key="dept.deptno" @click="pick(index)">
              <td>{{ index + 1 }}</td>
              <td>{{ dept.deptno }}</td>
              <td>{{ dept.dname }}</td>
              <td>{{ dept.loc }}</td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">
              <div class="btn btn-success text-center" @click="changeForm">등록</div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
