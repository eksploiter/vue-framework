<template>
  <div>
    <FancyButton> 클릭하기 </FancyButton>
    <FancyButton>
      <img src="@/assets/logo.svg" alt="" width="50" height="50" />
    </FancyButton>
    <hr />
    <MyComponent v-slot="{ text, count }">
      <!--destructuring-->
      <ul>
        <li>상위 component의 data: {{ content }}</li>
        <li>하위 component의 data: {{ text }}, {{ count }}</li>
      </ul>
    </MyComponent>
    <hr />
    <UseCard />

    <!-- TODO: MainLayout을 이용해서 AppHeader, AppContent, AppFooter를 배치해보자. -->

    <!-- END -->
  </div>
</template>

<script setup>
import FancyButton from '@/components/slot/FancyButton.vue'
import MyComponent from '@/components/slot/MyComponent.vue'
import { ref } from 'vue'
import MainLayout from './layout/MainLayout.vue'
import AppHeader from './sub/AppHeader.vue'
import AppContent from './sub/AppContent.vue'
import AppFooter from './sub/AppFooter.vue'
import UseCard from './card/UseCard.vue'
const content = ref('slot content')
</script>

<style lang="scss" scoped></style>
