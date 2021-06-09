<template>
  <div>
    <todo-input/>
    <todo-list/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import TodoInput from './components/TodoInpput/index.vue'
import TodoList from './components/TodoList/index.vue'
import { IUseTodo, useTodo } from './hooks'
export default defineComponent({
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  setup() {
    const { setTodoList }:IUseTodo = useTodo();
    // 初始化读取localStore
    onMounted(() => {
      setTodoList()
    })
  }
})
</script>

<style>

</style>
