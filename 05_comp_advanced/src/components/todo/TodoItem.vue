<template>
  <li class="todo" :class="{ completed: todo.completed, editing: isEditing }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" @change="updateCompleted" />
      <label @dblclick="editTodo">{{ todo.title }}</label>
      <button class="destroy" @click="$emit('remove', todo)"></button>
    </div>
    <input
      v-if="isEditing"
      class="edit"
      type="text"
      v-model="editedTitle"
      @vue:mounted="({ el }) => el.focus()"
      @blur="doneEdit"
      @keyup.enter="doneEdit"
      @keyup.escape="cancelEdit"
    />
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['remove', 'update'])

const isEditing = ref(false)
const editedTitle = ref('')

function updateCompleted(e) {
  emits('update', { ...props.todo, completed: e.target.checked })
}

function editTodo() {
  editedTitle.value = props.todo.title
  isEditing.value = true
}

function doneEdit() {
  if (isEditing.value) {
    const value = editedTitle.value.trim()
    if (value) {
      emits('update', { ...props.todo, title: value })
    } else {
      emits('remove', props.todo)
    }
    isEditing.value = false
  }
}

function cancelEdit() {
  isEditing.value = false
  editedTitle.value = props.todo.title
}
</script>
