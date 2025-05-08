<template>
  <div>
    <div :class="classSet">다양하게 class를 적용시키자.</div>
    <!-- TODO: class를 선택 과정을 변경하기 위한 checkbox를 구성하세요.-->

    <!-- END-->
  </div>
</template>

<script setup>
import { ref } from 'vue';
// TODO: set1, set2, set3를 적용하기 위해 data를 구성하세요.
 const classSet = {};

// END
</script>

<style lang="scss" scoped>
.set1 {
  background-color: aqua;
  color: purple;
}
.set2 {
  text-decoration: overline;
  font-style: italic;
}
.set3 {
  border: 1px solid blue;
}
</style>
