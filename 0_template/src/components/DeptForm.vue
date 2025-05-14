<script setup>
import { reactive } from 'vue'

const dept = reactive({ deptno: '', dname: '', loc: '' })
const emit = defineEmits(['registerDept'])

const registerDept = () => {
  emit('registerDept', dept)
  clear()
}

const clear = () => {
  dept.deptno = ''
  dept.dname = ''
  dept.loc = ''
}
</script>

<template>
  <div class="container">
    <div class="row mt-3">
      <h2 class="bg-danger text-light text-center">부서 등록</h2>
    </div>
    <form method="post" class="row">
      <table class="table">
        <tbody>
          <tr>
            <th><label for="deptno">부서번호</label></th>
            <td>
              <input type="text" name="deptno" v-model.lazy="dept.deptno" />
              <!--양방향 데이터 바인딩-->
            </td>
          </tr>
          <tr>
            <th><label for="dname">부서이름</label></th>
            <td>
              <input type="text" name="dname" id="dname" v-model.lazy="dept.dname" />
            </td>
          </tr>
          <tr>
            <th><label for="loc">지역</label></th>
            <td>
              <input type="text" name="loc" id="loc" v-model.lazy="dept.loc" />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <input type="button" value="등록" class="btn btn-warning m-1" @click="registerDept" />
              <input type="reset" value="취소" class="btn btn-info m-1" @click="clear" />
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  </div>
</template>

<style scoped></style>
