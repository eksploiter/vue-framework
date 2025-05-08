<template>
  <section class="todoapp">
    <TodoHeader @add-todo="addTodo" />
    <section class="main" v-show="todos.length">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        :checked="remaining === 0"
        @change="toggleAll"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <TodoItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodo"
          @update="updateTodo"
        />
      </ul>
    </section>
    <TodoFooter
      v-show="todos.length"
      :remaining="remaining"
      :todosCount="todos.length"
      :visibility="visibility"
      @change-filter="changeFilter"
      @clear-completed="removeCompleted"
    />
  </section>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import TodoHeader from './TodoHeader.vue'
import TodoItem from './TodoItem.vue'
import TodoFooter from './TodoFooter.vue'

const STORAGE_KEY = 'vue-todomvc'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed),
}

// state
const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
const visibility = ref('all')

// derived state
const filteredTodos = computed(() => filters[visibility.value](todos.value))
const remaining = computed(() => filters.active(todos.value).length)

// persist state
watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value))
})

function toggleAll(e) {
  const completed = e.target.checked
  todos.value = todos.value.map((todo) => ({
    ...todo,
    completed,
  }))
}

function addTodo(todo) {
  todos.value.push(todo)
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t.id !== todo.id)
}

function updateTodo(updatedTodo) {
  todos.value = todos.value.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
}

function removeCompleted() {
  todos.value = filters.active(todos.value)
}

function changeFilter(filter) {
  visibility.value = filter
}
</script>

<style scoped>
@import 'https://unpkg.com/todomvc-app-css@2.4.1/index.css';
</style>
