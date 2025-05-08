<template>
  <div class="container">
    <h1>login</h1>
    <form action="${root }/member/login" method="post" class="m-3" @submit.prevent="login">
      <div class="mb-3 row">
        <label for="email" class="col-sm-2 col-form-label">이메일</label>
        <div class="col-sm-10">
          <input
            type="email"
            id="email"
            v-model="member.email"
            placeholder="email 입력"
            class="form-control"
            required
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
      <div class="d-flex justify-content-end align-items-center">
        <div class="form-check">
          <input
            type="checkbox"
            v-model="saveEmail"
            name="remember-me"
            id="remember-me"
            class="form-check-input"
          />
          <label for="remember-me" class="form-check-label">로그인 유지</label>
        </div>
        <button type="submit" class="btn btn-primary ms-3" @click.prevent="login">로그인</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
const globalStatus = inject('globalStatus')
// 멤버 관리
const member = ref({
  email: localStorage.getItem('email'),
})
// 이메일 저장 관리
const saveEmail = ref(member.value.email ? true : false)

const login = () => {
  if (member.value.email !== 'admin@ssafy.com' || member.value.password !== '1234') {
    globalStatus.value.alertMsg('id/pass 확인')
    return
  }
  globalStatus.value.loginUser = { name: '김싸피', ...member.value }
  globalStatus.value.isLoggedIn = true
  // cookie를 활용하는 부분을 객체화 해서 storage에 저장해보자.
  if (saveEmail.value) {
    localStorage.setItem('email', member.value.email)
  } else {
    localStorage.removeItem('email')
  }
}
</script>

<style scoped></style>
