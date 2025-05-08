<template>
  <header class="header">
    <h1>Todos</h1>
    <input class="new-todo" autofocus placeholder="What needs to be done?" @keyup.enter="addTodo" />
  </header>
</template>

<script setup>
const emit = defineEmits(['add-todo'])

function addTodo(e) {
  const value = e.target.value.trim()
  if (value) {
    e.target.value = ''
    emit('add-todo', {
      id: Date.now(),
      title: value,
      completed: false,
    })
  }
}
</script>
