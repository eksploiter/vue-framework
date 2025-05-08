<template>
  <ExtraLibraryTestVue />
  <hr />
  <AppHeader />
  <hr />
  <LoginForm />
  <hr />
  <MemberModifyForm />
  <hr />
  <MemberRegistForm />
  <hr />
  <MemberDetail />
  <hr />
  <MemberList />
  <hr />
  <CommonError status="404" />
  <hr />
  <AppFooter />
</template>
<script setup>
import ExtraLibraryTestVue from '@/views/extra/ExtraLibraryTestVue.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import MemberRegistForm from './views/member/MemberRegistForm.vue'
import MemberDetail from './views/member/MemberDetail.vue'
import MemberList from './views/member/MemherList.vue'
import MemberModifyForm from './views/member/MemberModifyForm.vue'

import CommonError from './views/error/CommonError.vue'

import AppHeader from '@/components/common/AppHeader.vue'
import LoginForm from './views/member/LoginForm.vue'
</script>

<style scoped></style>
