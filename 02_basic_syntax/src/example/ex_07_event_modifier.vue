<template>
  <div>
    <!--TODO: 01. valid 할 경우만 submit 되도록 처리하시오.-->
    <form action="#"> 
      <label>ID:</label><input type="text" placeholder="ID는 4~8글자입니다." v-model="id" />
      <button type="submit">전송 1(form)</button>
    </form>

    <!--END-->

    <form ref="myform">
      <!--TODO: form이 valid 할 경우만 ajax로 요청하도록 처리하시오.-->
      <input v-model="user.id" pattern="^.{4,8}$" data-key="idValidFail" data-msg="아이디는 4-8글자" @invalid="handleInputInvalid" />
      <span class="error">{{ errors.idValidFail }}</span> <br />
      <!-- 02. 비밀번호에 대한 부분을 추가해보자.-->

      <!--END-->
      <button type="button" @click="checkForm">전송 2(ajax)</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const id = ref('');
const login = (e) => {
  if (!/.{4,}/.test(id.value)) {
    alert('ID는 4~8글자입니다.');
  } else {
    e.target.submit();
  }
};

const myform = ref(null); // ref로 선언한 form 객체
const user = ref({}); // id, pass로 구성된 사용자 정보
const errors = ref({}); // 특정 field의 에러를 저장하는 객체(errors.idValidFail, erros.passValidFail)

// TODOBLOCK: 03. 전송 2(ajax)가 호출될 때 invalid 이벤트로 myform의 validity를 확인하세요.
const passAttr = ref({
  pattern: '^[0-9]{4,8}$',
  'data-key': 'passValidFail',
  'data-msg': '비번은 숫자 4~8글자',
  required: true,
});

function checkForm() {
  errors.value = {};
  const isValid = myform.value.checkValidity();
  console.log(user.value);
  if (isValid) {
    alert('ajax로 서버로 전송');
  } else {
    console.log('제대로 입력하자.');
  }
}

function handleInputInvalid(e) {
  errors.value[e.target.dataset.key] = e.target.dataset.msg;
}

// END
</script>

<style lang="scss" scoped></style>
