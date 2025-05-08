<!-- ExamApp.vue - 시험 애플리케이션 메인 컴포넌트 -->
<template>
  <div class="exam">
    <h1>간단한 온라인 시험</h1>

    <div class="questions">
      <!-- TODO: 04-4. questions 요소를 자식 컴포넌트에서 표현하세요.(question의 type으로 구분) -->
      <!-- 하위 컴포넌트를 만들 때 question 내용과 isSubmitted를 바인딩하고 answer-updated 이벤트를 처리한다.-->

        <!--END-->
      </div>
    </div>

    <div class="exam-controls">
      <!--TODO: 04-5. 버튼 클릭 시 isSubmitted를 변경하고 맞은점수/총점을 출력하세요.-->
       <button>제출하기</button><div class="total-score">총점: ? / ? 점</div>

      <!--END-->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ShortAnswerQuestion from '@/components/exam/QuestionShortAnswer2.vue'
import MultipleChoiceQuestion from '@/components/exam/QuestionMultipleChoice2.vue'

const questions = ref([
  {
    number: 1,
    type: 'short_answer',
    text: '대한민국의 수도는?',
    points: 2,
    correctAnswer: '서울',
    isCorrect: false,
  },
  {
    number: 2,
    type: 'multi_choice',
    text: '다음 중 프랑스의 수도는?',
    points: 3,
    correctAnswer: 2,
    isCorrect: false,
    options: ['런던', '베를린', '파리', '마드리드', '로마'],
  },
])

// TODO: 04-1. ref isSubmitted와 computed totalScore, totalPossibleScore를 작성하세요.

// END

//TODO: 04-2. emit으로 전달된 값으로 questions를 업데이트 하는 updateAnswers를 작성하세요.

// END

// TODO: 04-3. 제출하기가 클릭됐을 때 isSubmitted를 true로 처리하세요.
</script>

<style>
.exam {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.questions {
  margin-bottom: 20px;
}
.exam-controls {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}
.total-score {
  margin-top: 10px;
  font-weight: bold;
  font-size: 1.2em;
}
button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
