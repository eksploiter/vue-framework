<template>
  <footer class="footer" v-show="todosCount > 0">
    <span class="todo-count">
      <strong>{{ remaining }}</strong>
      <span>{{ remaining === 1 ? ' item' : ' items' }} left</span>
    </span>
    <ul class="filters">
      <li>
        <a
          href="#"
          :class="{ selected: visibility === 'all' }"
          @click.prevent="$emit('change-filter', 'all')"
          >All</a
        >
      </li>
      <li>
        <a
          href="#"
          :class="{ selected: visibility === 'active' }"
          @click.prevent="$emit('change-filter', 'active')"
          >Active</a
        >
      </li>
      <li>
        <a
          href="#"
          :class="{ selected: visibility === 'completed' }"
          @click.prevent="$emit('change-filter', 'completed')"
          >Completed</a
        >
      </li>
    </ul>
    <button
      class="clear-completed"
      @click="$emit('clear-completed')"
      v-show="todosCount > remaining"
    >
      Clear completed
    </button>
  </footer>
</template>

<script setup>
defineProps({
  remaining: {
    type: Number,
    required: true,
  },
  todosCount: {
    type: Number,
    required: true,
  },
  visibility: {
    type: String,
    required: true,
  },
})

defineEmits(['change-filter', 'clear-completed'])
</script>
