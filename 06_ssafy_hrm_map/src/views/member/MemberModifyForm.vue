<template>
  <div class="container">
    <h1>회원수정</h1>
    <form action="${root}/auth/member-modify" method="post" class="m-3">
      <input type="hidden" name="mno" v-model="member.mno" />

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
            readonly
            v-model="member.email"
          />
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

      <div class="mb-3 row">
        <label for="password" class="col-sm-2 col-form-label">권한</label>
        <div class="col-sm-10">
          <input type="text" name="role" id="role" class="form-control" v-model="member.role" />
        </div>
      </div>

      <button type="submit" class="btn btn-primary" @click.prevent="modifyMember">수정</button>
    </form>

    <div class="alert alert-danger" role="alert" v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const member = ref({
  mno: 1,
  name: '관리자',
  email: 'admin@ssafy.com',
  password: '1234',
  role: 'role',
})
const error = ref('')

const modifyMember = () => {
  console.log('modify member')
}
</script>

<style lang="scss" scoped></style>
