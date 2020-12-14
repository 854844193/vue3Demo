<template>
  <div id="wrapper">
    <todo-input />
    <todo-list />
  </div>
</template>

<script lang="ts">
import TodoInput from "./components/TodoInput/index.vue";
import TodoList from "./components/TodoList/index.vue";
export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
  },
};
</script>

<style>
</style>
