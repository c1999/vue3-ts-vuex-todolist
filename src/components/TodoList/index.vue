<template>
  <div>
      <h1>todo-list</h1>
      <todo-item/>
  </div>
</template>

<script>
import TodoItem from './item.vue'
export default {    
    name: 'TodoList',
    components: {
        TodoItem
    }
}

</script>
