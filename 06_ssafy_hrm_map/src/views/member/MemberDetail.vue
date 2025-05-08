<template>
  <div class="container mt-5">
    <div class="row">
      <MemberDetailInfo :member="member" @profile-update="profileUpdate" />
      <MemberDetailAddress :member="member" @address-update="addressUpdate" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MemberDetailInfo from '@/components/member/MemberDetailInfo.vue'
import MemberDetailAddress from '@/components/member/MemberDetailAddress.vue'
const member = ref({
  mno: '1',
  name: '관리자',
  email: 'admin@ssafy.com',
  role: 'ADMIN',
  refresh: null,
  addresses: [
    {
      ano: '1',
      title: '기본',
      address: '서울특별시 강남구 테헤란로',
      detailAddress: '212',
      x: '127.039600248343',
      y: '37.5012767241426',
    },
    {
      ano: '2',
      title: '집',
      address: '경상북도 울릉군 울릉읍',
      detailAddress: '독도 안용복길 3',
      x: '131.865640222559',
      y: '37.2406417949318',
    },
  ],
})

const addressUpdate = (addresses) => {
  member.value.addresses = addresses
}
const profileUpdate = (profile) => {
  member.value.profile = profile
}
</script>

<style scoped></style>
