
<script setup>
import { ref } from 'vue'

const title = ref('')

const emit = defineEmits(['add'])

function submitTodo() {
  if (!title.value.trim()) return

  emit('add', title.value.trim())
  title.value = ''
}
</script>

<template>
  <form @submit.prevent="submitTodo">
    <input
      v-model="title"
      type="text"
      placeholder="Ajouter une tâche..."
    />

    <button type="submit">
      Ajouter
    </button>
  </form>
</template>
