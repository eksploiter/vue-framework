<template>
  <div class="container">
    <h1>회원가입</h1>
    <form action="${root}/member/regist-member" method="post" class="m-3">
      <div class="mb-3 row">
        <label for="name" class="col-sm-2 col-form-label">이름</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            required
            v-model="member.name"
          />
        </div>
      </div>

      <div class="mb-3 row">
        <label for="email" class="col-sm-2 col-form-label">이메일</label>
        <div class="col-sm-10">
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            required
            v-model="member.email"
            @input="checkEmail"
            :class="{ 'is-valid': canUse === 'true', 'is-invalid': canUse === 'false' }"
          />
          <div class="invalid-feedback">이미 사용중인 email입니다.</div>
        </div>
      </div>

      <div class="mb-3 row">
        <label for="password" class="col-sm-2 col-form-label">비밀번호</label>
        <div class="col-sm-10">
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            required
            v-model="member.password"
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary" @click.prevent="registMember">등록</button>
    </form>

    <div class="alert alert-danger" role="alert" v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const member = ref({}) // Member 관리
const error = ref('') // error 관리
const canUse = ref('') // email 중복 관리

const registMember = () => {
  console.log('회원 등록', member.value)
}

const checkEmail = async () => {
  const arr = ['', 'true', 'false']
  canUse.value = arr[member.value.email?.length % 3]
  console.log(canUse.value)
}
</script>

<style scoped></style>
