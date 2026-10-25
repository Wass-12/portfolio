
<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['delete', 'toggle'])
</script>

<template>
  <li class="todo-item">
    <label>
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="emit('toggle', todo.id)"
      />

      <span :class="{ completed: todo.completed }">
        {{ todo.title }}
      </span>
    </label>

    <button @click="emit('delete', todo.id)">
      Supprimer
    </button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

label {
  display: flex;
  align-items: center;
  gap: 10px;
}

.completed {
  text-decoration: line-through;
  color: #777;
}

button {
  cursor: pointer;
}
</style>
