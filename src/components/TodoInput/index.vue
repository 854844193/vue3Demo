<template>
  <div>
    <input type="text" v-model="inputValue" @keyup="setValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodo } from "../../hocks/index";

export default defineComponent({
  name: "TodoInput",
  setup() {
    const inputValue = ref<string>("");
    const { setTodo } = useTodo();
    const setValue = (e: KeyboardEvent): void => {
      if (e.keyCode === 13 && inputValue.value.trim().length) {
        setTodo(inputValue.value);
        inputValue.value = "";
      }
    };
    return {
      inputValue,
      setValue,
    };
  },
});
</script>

<style >
</style>