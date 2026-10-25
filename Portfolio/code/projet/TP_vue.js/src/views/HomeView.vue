<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '../composables/useFetch'

const router = useRouter()

const {
  data,
  loading,
  error,
  execute,
} = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=5')

onMounted(() => {
  execute()
})

function connect() {
  sessionStorage.setItem('isConnected', 'true')
  router.push('/todos')
}
</script>

<template>
  <main class="page">
    <section class="welcome">
      <h1>Bienvenue dans ma Todo List !</h1>
      <p>Organise tes tâches facilement avec Vue.js et Pinia.</p>

      <button @click="connect">
        Accéder à ma liste de tâches
      </button>
    </section>

    <section class="api-section">
      <h2>Exemples de tâches chargées depuis Internet</h2>
      <p class="description">
        Voici cinq tâches récupérées automatiquement depuis une API.
      </p>

      <p v-if="loading">Chargement des tâches...</p>

      <p v-else-if="error" class="error">
        Impossible de charger les tâches : {{ error }}
      </p>

      <ul v-else-if="data" class="task-list">
        <li v-for="item in data" :key="item.id" class="task-card">
          <span class="task-id">Tâche {{ item.id }}</span>
          <span class="task-title">{{ item.title }}</span>

          <span :class="item.completed ? 'status done' : 'status pending'">
            {{ item.completed ? 'Terminée' : 'À faire' }}
          </span>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.page {
  max-width: 850px;
  margin: 40px auto;
  padding: 20px;
}

.welcome {
  padding: 28px;
  border-radius: 14px;
  background: #f0f7ff;
  color: #203047;
}

h1 {
  margin-top: 0;
}

button {
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

.api-section {
  margin-top: 35px;
}

.description {
  color: #666;
}

.task-list {
  display: grid;
  gap: 12px;
  padding: 0;
  list-style: none;
}

.task-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.task-id {
  color: #666;
  font-size: 13px;
}

.task-title {
  font-weight: bold;
}

.status {
  width: fit-content;
  padding: 5px 9px;
  border-radius: 6px;
  font-size: 13px;
}

.done {
  background: #dcfce7;
  color: #166534;
}

.pending {
  background: #fef3c7;
  color: #92400e;
}

.error {
  color: #b91c1c;
}
</style>
