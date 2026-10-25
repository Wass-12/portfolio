
<script setup>
import { useTodoStore } from '../stores/UseTodoStore'
import TodoForm from '../components/TodoForm.vue'
import TodoItem from '../components/TodoItem.vue'

const todoStore = useTodoStore()

function addTodo(title) {
  todoStore.addTodo(title)
}

function deleteTodo(id) {
  todoStore.deleteTodo(id)
}

function toggleTodo(id) {
  todoStore.toggleTodo(id)
}
</script>

<template>
  <main class="page">
    <h1>Ma liste de tâches</h1>

    <p>
      Il reste {{ todoStore.remainingTodos }} tâche(s) à faire.
    </p>

    <TodoForm @add="addTodo" />

    <p v-if="todoStore.todos.length === 0">
      Aucune tâche pour le moment.
    </p>


<TransitionGroup name="todo" tag="ul" v-else>
  <TodoItem
    v-for="todo in todoStore.todos"
    :key="todo.id"
    :todo="todo"
    @delete="deleteTodo"
    @toggle="toggleTodo"
  />
</TransitionGroup>

  </main>
</template>

<style scoped>
.page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.todo-enter-active,
.todo-leave-active,
.todo-move {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.todo-enter-from,
.todo-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.todo-leave-active {
  position: absolute;
}

</style>
