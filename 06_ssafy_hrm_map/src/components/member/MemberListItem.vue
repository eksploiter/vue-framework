<template>
  <tr>
    <td>{{ member.mno }}</td>
    <td>{{ member.name }}</td>
    <td>
      <a :href="'/auth/member-detail?email=' + member.email" @click.prevent="memberDetail">{{
        member.email
      }}</a>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
})

const memberDetail = () => {
  //router.push({ name: 'memberDetail', query: { email: props.member.email } })
  console.log('page 이동', props.member.emai)
}
</script>

<style lang="scss" scoped></style>
