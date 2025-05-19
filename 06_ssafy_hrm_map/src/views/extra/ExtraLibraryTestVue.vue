<template>
  <div class="container">
    <!--TODO: 02-2. vuetify의 component를 사용해보자.-->

    <!--END-->
    <!--TODO: 03-3. kakao map을 사용해보자.-->
    <!-- 지도를 표시할 div 입니다 -->
    <div id="map" style="width: 100%; height: 350px" ref="map"></div>
    <!--END-->
  </div>
</template>

<script setup>
import { useTemplateRef, onMounted } from 'vue'
const mapContainer = useTemplateRef('map')
// TODO: 03-2. kakao map을 사용해보자.
const mapOption = {
  center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
  level: 3, // 지도의 확대 레벨
}

onMounted(() => {
  const map = new window.kakao.maps.Map(mapContainer.value, mapOption)
})
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다

// END
</script>

<style lang="scss" scoped></style>
