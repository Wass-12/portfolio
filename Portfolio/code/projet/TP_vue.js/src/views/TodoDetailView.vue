
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTodoStore } from '../stores/UseTodoStore'

const route = useRoute()
const todoStore = useTodoStore()

const todo = computed(() =>
  todoStore.todos.find(item => item.id === Number(route.params.id))
)
</script>

<template>
  <main class="page">
    <h1>Détail de la tâche</h1>

    <div v-if="todo">
      <h2>{{ todo.title }}</h2>
      <p>
        Statut :
        {{ todo.completed ? 'Terminée' : 'À faire' }}
      </p>
    </div>

    <p v-else>Cette tâche n'existe pas.</p>

    <RouterLink to="/todos">Retour à la liste</RouterLink>
  </main>
</template>

<style scoped>
.page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}
</style>
