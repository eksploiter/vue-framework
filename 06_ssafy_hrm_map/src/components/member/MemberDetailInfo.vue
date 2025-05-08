<template>
  <div class="col-md-5">
    <div class="card mb-4">
      <div class="card-header">
        <h4>회원 정보</h4>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <p><strong>회원번호:</strong> {{ member.mno }}</p>
            <p><strong>이름:</strong> {{ member.name }}</p>
            <p><strong>이메일:</strong> {{ member.email }}</p>
            <p><strong>권한:</strong> {{ member.role }}</p>
          </div>

          <!-- 이미지 표시 -->
          <div class="mt-3 col-md-6 text-center">
            <img alt="" :src="profileImg" id="img-profile" />
          </div>
        </div>
        <div class="d-flex mt-5 justify-content-center" v-if="canModify">
          <form method="post" action="${root}/auth/member-delete" id="form-delete">
            <input type="hidden" name="mno" value="${member.mno}" />
            <input type="hidden" name="email" value="${member.email }" />
            <button type="button" class="btn btn-primary mx-3" @click="updateMember">수정</button>
            <button type="button" class="btn btn-danger mx-3" @click="deleteMember">삭제</button>
            <button type="button" class="btn btn-danger mx-3" @click="showDialog">
              프로필변경
            </button>
          </form>
        </div>
      </div>
    </div>
    <dialog ref="profileDialog">
      <input type="file" name="profile" id="profile" ref="profile" />
      <button class="btn btn-primary" id="btn-profile-regist" @click="updateProfile">등록</button>
      <button class="btn btn-primary" id="btn-dialog-close" @click="close">닫기</button>
    </dialog>
  </div>
</template>

<script setup>
import { useTemplateRef, inject, computed } from 'vue'
import defaultProfileImg from '@/assets/img/profile.png' // assets의 이미지 로딩

const props = defineProps({
  member: Object,
})
const emit = defineEmits(['profile-update'])

const profileDialog = useTemplateRef('profileDialog') // 화면 요소의 직접 참조
const profile = useTemplateRef('profile') // 화면 요소의 직접 참조

const globalStatus = inject('globalStatus')
const canModify = computed(
  () =>
    globalStatus.value.loginUser.email === props.member.email ||
    globalStatus.value.loginUser.role === 'ADMIN' ||
    true,
)
const profileImg = computed(() => {
  return props.member.profile ? 'data:image/jpeg;base64,' + props.member.profile : defaultProfileImg
})

const updateMember = () => {
  console.log('회원 수정 페이지로 이동')
}
const deleteMember = () => {
  if (confirm('정말 삭제하시겠습니까?')) {
    console.log('목록으로 이동')
  }
}
const showDialog = () => {
  profileDialog.value.showModal()
}

const updateProfile = () => {
  emit('profile-update', profile.value)
  close()
}

const close = () => {
  profileDialog.value.close()
}
</script>

<style scoped>
#profile {
  max-width: 150px;
}

#img-profile {
  width: 150px;
}
</style>
