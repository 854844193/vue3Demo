<template>
  <div class="itemInput">
    <input
      type="text"
      placeholder="write your plan..."
      v-model="inputValue"
      @keyup="setValue"
    />
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

<style scoped>
.itemInput input {
  outline: none;
  width: 450px;
  height: 40px;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 20px;
  border: 2px solid #ff7a00;
}
</style>>

