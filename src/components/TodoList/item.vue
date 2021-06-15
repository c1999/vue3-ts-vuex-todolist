<template>
  <div>
    <input type="checkbox" @click="setStatus(item.id)" />
    <span :class="item.status === FINISHED ? 'line-through' : ''">
      {{ item.content }}
    </span>
    <button @click="removeTodo(item.id)">删除</button>
    <button
      @click="setDoing(item.id)"
      v-if="item.status !== FINISHED"
      :class="item.status === DOING ? 'doing' : 'willdo'"
    >
      {{ item.status === DOING ? '正在做': '马上做'}}
    </button>
  </div>
</template>

<script lang="ts">
import { ITodo, TODO_STATUS } from "@/typings";
import { defineComponent, PropType } from "@vue/runtime-core";
import { useTodo } from "../../hooks";
export default defineComponent({
  name: "TodoItem",
  props: {
    item: Object as PropType<ITodo>,
  },
  setup() {
    // 操作方法
    const { removeTodo, setStatus, setDoing } = useTodo();
    // 状态枚举
    const statusState = {
      DOING: TODO_STATUS.DOING,
      WILLD: TODO_STATUS.WILLD,
      FINISHED: TODO_STATUS.FINISHED,
    };
    return {
      setStatus,
      removeTodo,
      setDoing,
      ...statusState,
    };
  },
});
</script>
<style>
.line-through {
  text-decoration: line-through;
}
.willdo {
  background-color: azure;
}
.doing {
  background-color: cornflowerblue;
}
</style>