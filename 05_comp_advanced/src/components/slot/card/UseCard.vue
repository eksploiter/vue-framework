<!-- App.vue에서 Card 컴포넌트 사용 예제 -->
<template>
  <div class="container">
    <h1>Vue Slot 예제</h1>

    <!-- 기본 카드 (기본값 사용) -->
    <Card class="example-card" />

    <!-- 커스텀 카드 1: 알림 카드 -->
    <Card class="example-card">
      <template v-slot:header>
        <h3 class="alert-header">📢 중요 알림</h3>
      </template>

      <p>이번 주 금요일 오후 3시에 시스템 점검이 있을 예정입니다. 작업을 미리 저장해주세요.</p>

      <template v-slot:footer>
        <button class="btn alert-btn">확인했습니다</button>
      </template>
    </Card>

    <!-- 커스텀 카드 2: 제품 카드 -->
    <Card class="example-card">
      <template #header>
        <div class="product-header">
          <h3>프리미엄 노트북</h3>
          <span class="price">1,500,000원</span>
        </div>
      </template>

      <div class="product-content">
        <img src="@/assets/logo.svg" alt="노트북 이미지" />
        <p>최신 프로세서와 고급 그래픽 카드를 탑재한 프리미엄 노트북입니다.</p>
        <ul>
          <li>16GB RAM</li>
          <li>512GB SSD</li>
          <li>15.6인치 디스플레이</li>
        </ul>
      </div>

      <template #footer>
        <div class="product-actions">
          <button class="btn">장바구니에 추가</button>
          <button class="btn primary">바로 구매</button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from './AppCard.vue'
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.example-card {
  margin-bottom: 30px;
}

.alert-header {
  color: #d9534f;
}

.alert-btn {
  background-color: #d9534f;
}

.alert-btn:hover {
  background-color: #c9302c;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: bold;
  font-size: 1.2em;
  color: #4caf50;
}

.product-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-content img {
  width: 100px;
  margin-bottom: 15px;
}

.product-actions {
  display: flex;
  gap: 10px;
}

.btn.primary {
  background-color: #2196f3;
}

.btn.primary:hover {
  background-color: #0b7dda;
}
</style>
