<!-- QuestionBase.vue - 기본 문제 컴포넌트 -->
<template>
  <div class="question">
    <div class="question-header">
      <!--TODO: 01-2. number, text, points를 이용해서 문제를 구성하세요.-->
    </div>

    <!-- TODO: 01-3. 각 문제 유형별 답변을 입력 받기 위한 slot을 구성하세요. 이름은 answer-input -->

    <!-- 채점 결과 표시 영역 -->
    <!--TODO: 01-4. isSubmitted 상태에 따라서 isCorrect==true인 경우는 points를, 아니면 correctAnswer를 보여주자.-->
    <!-- 정답인 경우 correct class, 오답인 경우 incorrect class를 적용한다.-->
     <div class='result'></div>

    <!--END-->
  </div>
</template>

<script setup>
// TODO: 01-1. 필요한 props들을 선언하세요.
//  [number: Number, 필수], [text: String, 필수], [points: Number, 필수],
//  [correctAnswer: String or Number], [isSubmitted: Boolean], [isCorrect: Boolean]

// END
</script>

<style scoped>
.question {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
}
.question-header {
  margin-bottom: 10px;
}
.result {
  margin-top: 10px;
}
.correct {
  color: green;
}
.incorrect {
  color: red;
}
</style>
