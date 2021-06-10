<template>
  <div>
    <todo-input />
    <todo-list :todoList="todoList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore, Store } from "vuex";
import TodoInput from "./components/TodoInpput/index.vue";
import TodoList from "./components/TodoList/index.vue";
import { IUseTodo, useTodo } from "./hooks";
export default defineComponent({
  name: "App",
  components: {
    TodoInput,
    TodoList,
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store: Store<any> = useStore();
    // 初始化读取localStore
    onMounted(() => {
      setTodoList();
    });
    return {
      todoList: computed(() => store.state.list),
    };
  },
});
</script>

<style>
</style>
