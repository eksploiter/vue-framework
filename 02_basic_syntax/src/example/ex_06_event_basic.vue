<template>
  <div>
    현재 잔고: <span>{{ info.balance }}</span>
    <hr />
    <label>거래 금액: </label>
    <input type="number" v-model.number="info.amount" /><br />
    <!--TODO: 01. inline 또는 method 방식을 이용해서 입금 또는 출금 처리하시오.-->
    <button>입금(함수 미사용)</button>
    <button>입금(함수 직접 호출)</button>
    <button>입금(함수 등록)</button>

    <!-- END -->
    <hr />
    <!--TODO: 02. id를 입력하고 enter키를 누르면 비밀번호를 입력할 수 있게 해보자.-->

    <!--END-->
  </div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';
const info = ref({ balance: 100, amount: 10 });
// TODO: 입금을 위한 deposited와 출금을 위한 withdraw 함수를 작성하시오.

// END

//TODO: 로그인을 위한 입력과 이벤트 부분을 처리하세요.

// END
</script>

<style lang="scss" scoped></style>
