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
import { ITodo } from "../../typings/index";
import { defineComponent, onMounted, PropType } from "vue";
import TodoItem from "./TodoItem.vue";
import { IUseTodo, useTodo } from "../../hocks";

export default defineComponent({
  name: "TodoList",
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  components: {
    TodoItem,
  },
  setup(props) {
    const { removeTodo, setStatus, setDoing }: IUseTodo = useTodo();

    return {
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>

<style >
</style>