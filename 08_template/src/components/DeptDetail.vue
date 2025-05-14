<script setup>
import { reactive, watch } from 'vue'
const props = defineProps({
  dept: {
    tupe: Object,
    required: true,
  },
})
const emit = defineEmits(['updateDept', 'deleteDept'])

const localDept = reactive({
  deptno: '',
  dname: '',
  loc: '',
})

// props.dept 값이 바뀔 때마다 localDept에 복사
watch(
  () => props.dept,
  (newVal) => {
    console.log('watch fired', newVal) // 디버깅
    if (newVal) {
      localDept.deptno = newVal.deptno
      localDept.dname = newVal.dname
      localDept.loc = newVal.loc
    }
  },
  { immediate: true },
)

const update = () => emit('updateDept', { ...localDept })
const remove = () => emit('deleteDept', localDept.deptno)
</script>
<!--반드시 로컬 복사본(localDept) 만들어서 바인딩해야 함-->

<template>
  <div class="container">
    <div class="row mt-3">
      <h2 class="bg-info text-light text-center">부서 조회</h2>
    </div>
    <form method="post" class="row">
      <table class="table">
        <tbody>
          <tr>
            <th><label for="deptno">부서번호</label></th>
            <td>
              <input
                type="text"
                name="deptno"
                id="deptno"
                v-model.lazy="localDept.deptno"
                :readonly="dept != null && dept.deptno"
              />
            </td>
          </tr>
          <tr>
            <th><label for="dname">부서이름</label></th>
            <td>
              <input type="text" name="dname" id="dname" v-model="localDept.dname" />
            </td>
          </tr>
          <tr>
            <th><label for="loc">지역</label></th>
            <td>
              <input type="text" name="loc" id="loc" v-model="localDept.loc" />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <input type="button" value="수정" class="btn btn-warning m-1" @click="update" />
              <input type="button" value="삭제" class="btn btn-dark m-1" @click="remove" />
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  </div>
</template>

<style scoped></style>
