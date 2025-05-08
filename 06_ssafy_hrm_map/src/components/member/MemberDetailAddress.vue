<template>
  <div class="col-md-7">
    <div class="card">
      <div class="card-header">
        <h4>주소 정보</h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered" id="table-user-address">
          <thead>
            <tr>
              <th>주소 제목</th>
              <th>주소</th>
              <th>상세 주소</th>
              <th>편집</th>
            </tr>
          </thead>
          <tbody id="address-body">
            <tr v-for="(item, idx) in member.addresses" :key="idx">
              <td>{{ item.title }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.detailAddress }}</td>
              <td>
                <button class="btn btn-danger" @click="deleteAddress(item.ano)">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
        <!--TODO: 04-1. MemberDetailAddressMap을 작성해서 주소에 대한 map을 출력해보자.-->

        <!--END-->
        <hr />
        <form id="formAddressAdd">
          <fieldset class="row g-3">
            <!-- address 등록용 -->
            <input type="hidden" name="mno" :value="member.mno" />
            <!-- member detail 조회용 -->
            <input type="hidden" name="email" :value="member.email" />
            <input type="hidden" name="x" id="x" />
            <input type="hidden" name="y" id="y" />
            <div class="col-md-2">
              <label for="addr_title" class="form-label">제목</label>
              <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                required
                v-model="address.title"
              />
            </div>
            <div class="col-md-5">
              <label for="addr_main" class="form-label">주소</label>
              <input
                type="text"
                class="form-control"
                id="address"
                name="address"
                required
                v-model="address.address"
              />
            </div>
            <div class="col-md-5">
              <label for="addr_detail" class="form-label">상세주소</label>
              <input
                type="text"
                class="form-control"
                id="detailAddress"
                name="detailAddress"
                required
                v-model="address.detailAddress"
              />
            </div>
            <div class="col-12 text-end">
              <button
                type="button"
                class="btn btn-primary"
                :data-mno="member.mno"
                id="btn-address-add"
                @click="addressInsert"
              >
                추가
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
  <div class="alert alert-danger" role="alert" v-if="error">{{ error }}</div>
</template>

<script setup>
import { ref } from 'vue'
// TODO: 04-2. MemberDetailAddressMap을 작성해서 주소에 대한 map을 출력해보자.
const error = ref('')
const address = ref({
  title: '테스트',
  address: '서울특별시 강남구 역삼동',
  detailAddress: '멀티캠퍼스',
})
const props = defineProps({
  member: Object,
})
// 단방향의 흐름을 만들기 위해서 수정 처리는 부모 컴포넌트에서 처리하도록 한다.
// props로 전달된 member를 수정하는 것이 아니라, 부모 컴포넌트에서 수정할 수 있도록 이벤트를 발생시킨다.

const emit = defineEmits(['address-update'])
const deleteAddress = (ano) => {
  if (confirm('정말 삭제하시겠습니까?')) {
    console.log('delete address', ano)
    emit('address-update', props.member.addresses)
  }
}
const addressInsert = () => {
  console.log('insert address', address.value)
  emit('address-update', props.member.addresses)
  address.value = {}
}
</script>

<style scoped>
th:nth-child(1) {
  width: 80px;
}

th:nth-child(2) {
  width: 50%;
}

th:nth-child(4) {
  width: 75px;
}

input[type='text'] {
  width: 100%;
}

#map {
  width: 100%;
  height: 300px;
}
</style>
