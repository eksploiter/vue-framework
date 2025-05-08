<template>
  <div>
    <!--TODO: 04-3. KakaoMap 컴포넌트를 사용한다. member의 addresses가 있을 경우만 보여주자.-->

    <!--END-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { KakaoMap } from 'vue3-kakao-maps'
const props = defineProps({
  member: Object,
})
const map = ref()
let bounds
// TODO: 04-4. KakaoMap을 표현하기 위해 필요한 스크립트를 작성하세요.

// END
</script>

<style scoped></style>
