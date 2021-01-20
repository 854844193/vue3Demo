<template>
  <div id="wrapper">
    <h1>Todo List</h1>
    <todo-input />
    <todo-list :todoList="todoList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import TodoInput from "./components/TodoInput/index.vue";
import TodoList from "./components/TodoList/index.vue";
import { IUseTodo, useTodo } from "./hocks";
import { Store, useStore } from "vuex";
import { ITodo } from "./typings";
export default defineComponent({
  name: "App",
  components: {
    TodoInput,
    TodoList,
  },
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store: Store<any> = useStore();
    console.log(store);

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
@import "./style/common.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#wrapper {
  width: 450px;
}
#wrapper h1 {
  margin: -60px 20px 20px;
}
</style>
