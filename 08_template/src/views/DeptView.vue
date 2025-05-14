<script setup>
import DeptList from '@/components/DeptList.vue'
import DeptForm from '@/components/DeptForm.vue'
import DeptDetail from '@/components/DeptDetail.vue'
import { reactive, ref } from 'vue'
const dept = reactive({})
const deptList = reactive([{ deptno: 10, dname: '개발1팀', loc: '서울' }])
const mode = ref('')

const changeMode = (payload) => {
  mode.value = payload.mode
  if (payload.data) {
    dept.deptno = payload.data.deptno
    dept.dname = payload.data.dname
    dept.loc = payload.data.loc
  }
  // dept에 값이 제대로 세팅되고 있는가?
  // 꼭 점검해야 하는 부분
  // 여기서 dept는 reactive({})니까 처음에는 {} 상태이다.
  // 그래서 위 코드 없이 그냥 mode.value = 'detail'만 하면, dept.deptno 필드가 생기지 않는다.
  // changeMode()가 호출될 때 payload.data가 제대로 들어오고 있는지 확인해본다.
}
const registerOrModifyDept = (payload) => {
  const idx = deptList.findIndex((d) => d.deptno == payload.deptno)
  if (idx === -1) {
    deptList.push({ ...payload })
  } else {
    deptList[idx].dname = payload.dname
    deptList[idx].loc = payload.loc
  }
  mode.value = ''
}
const deleteDept = (deptno) => {
  const idx = deptList.findIndex((d) => d.deptno == deptno)
  if (idx !== -1) deptList.splice(idx, 1)
  mode.value = '' // 상세 화면 닫기
}
</script>

<template>
  <div>
    <DeptList
      :dept="dept"
      :depts="deptList"
      @changeMode="changeMode"
      @updateDept="registerOrModifyDept"
    />
    <DeptForm v-if="mode === 'register'" @registerDept="registerOrModifyDept" />
    <DeptDetail
      v-else-if="mode === 'detail'"
      :dept="dept"
      @updateDept="registerOrModifyDept"
      @deleteDept="deleteDept"
    />
  </div>
</template>

<style scoped></style>
