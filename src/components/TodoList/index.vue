<template>
  <div>
    <todo-item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @removeTodo="removeTodo"
      @setStatus="setStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">
import TodoItem from "./item.vue";
import { ITodo } from "../../typings";
import { defineComponent, PropType } from "@vue/runtime-core";
import { useTodo } from "@/hooks";
export default defineComponent({
  name: "TodoList",
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  components: {
    TodoItem,
  },
  setup() {
    const { removeTodo, setStatus, setDoing } = useTodo();
    return {
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>
