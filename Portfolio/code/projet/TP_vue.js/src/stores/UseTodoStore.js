
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([
    { id: 1, title: 'Apprendre Vue.js', completed: false },
    { id: 2, title: 'Comprendre Pinia', completed: false },
    { id: 3, title: 'Terminer mon TP', completed: true },
  ])

  function addTodo(title) {
    if (!title.trim()) return

    todos.value.push({
      id: Date.now(),
      title: title.trim(),
      completed: false,
    })
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  function toggleTodo(id) {
    const todo = todos.value.find(todo => todo.id === id)

    if (todo) {
      todo.completed = !todo.completed
    }
  }

  const remainingTodos = computed(() =>
    todos.value.filter(todo => !todo.completed).length
  )

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    remainingTodos,
  }
})
