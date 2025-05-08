<!-- Card.vue 컴포넌트 -->
<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">
        <!-- 기본 제목 -->
        <h3>기본 카드 제목</h3>
      </slot>
    </div>

    <div class="card-body">
      <slot>
        <!-- 기본 내용 -->
        <p>카드의 기본 내용입니다. 내용을 추가하려면 slot을 사용하세요.</p>
      </slot>
    </div>

    <div class="card-footer">
      <slot name="footer">
        <!-- 기본 푸터 -->
        <button class="btn">확인</button>
      </slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f5f5f5;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 15px;
}

.card-footer {
  padding: 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  text-align: right;
}

.btn {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}
</style>
