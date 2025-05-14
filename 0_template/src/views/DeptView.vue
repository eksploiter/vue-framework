<script setup>
import DeptList from '@/components/DeptList.vue'
import DeptForm from '@/components/DeptForm.vue'
import DeptDetail from '@/components/DeptDetail.vue'
import { reactive, ref } from 'vue'
const dept = reactive({})
const mode = ref('')

const registerOrModifyDept = (payload) => {
  dept.deptno = payload.deptno
  dept.dname = payload.dname
  dept.loc = payload.loc
}
const changeMode = (payload) => {
  mode.value = payload.mode
}
</script>

<template>
  <div>
    <DeptList :dept="dept" @changeMode="changeMode" />
    <DeptForm v-if="mode === 'register'" @registerDept="registerOrModifyDept" />
    <DeptDetail v-else-if="mode === 'detail'" />
  </div>
</template>

<style scoped></style>
