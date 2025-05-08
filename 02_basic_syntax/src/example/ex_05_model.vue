<template>
  <div>
    <!--TODO: 요청사항을 만족시키도록 처리하시오.-->
    <label
    <label>사용자의 나이가 숫자로 적용되도록 input을 작성하시오.</label><br />
    <label>사용자의 통신사 정보를 skt, kt, lgup 중 하나를 선택하도록 input을 작성하시오</label
    <label>사용자의 전공 정보를 com, sw, etc에서 복수개 선택하도록 처리하시오</label><br />
    <label>사용자의 주소지를 select에서 선택할 수 있도록 select를 작성하시오.</label><br />

    <!-- END -->
    <hr />
    <label>사용자 정보</label>
    {{ user }}, {{ user.age + 10 }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
const user = ref({ major: [], age: 0 });
</script>

<style lang="scss" scoped></style>
