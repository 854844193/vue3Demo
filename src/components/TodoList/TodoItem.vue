<template>
  <div class="todoItem">
    <input
      type="checkbox"
      :checked="item.status === Finish"
      @click="setStatus(item.id)"
    />
    <p :class="item.status === Finish ? 'line-through' : ''">
      {{ item.content }}
    </p>
    <div>
      <button
        style="margin-left: 10px; background-color: #f56c6c"
        @click="removeTodo(item.id)"
      >
        Delete
      </button>
      <button
        v-if="item.status !== Finish"
        @click="setDoing(item.id)"
        style="margin-left: 10px"
        :class="item.status === Doing ? 'doing' : 'willDo'"
      >
        {{ item.status === Doing ? "Padding" : "Todo" }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IState, ITodo, TODO_STATUS } from "../../typings";

interface IStateStatus {
  Doing: TODO_STATUS;
  wiilDo: TODO_STATUS;
  Finish: TODO_STATUS;
}

export default defineComponent({
  name: "TodoItem",
  props: {
    item: Object as PropType<ITodo>,
  },
  setup(props, { emit }) {
    const stateStatus: IStateStatus = {
      Doing: TODO_STATUS.Doing,
      wiilDo: TODO_STATUS.WillDo,
      Finish: TODO_STATUS.Finish,
    };
    const setStatus = (id: number): void => {
      emit("setStatus", id);
    };
    const setDoing = (id: number): void => {
      emit("setDoing", id);
    };
    const removeTodo = (id: number): void => {
      emit("removeTodo", id);
    };

    return {
      ...stateStatus,
      setStatus,
      setDoing,
      removeTodo,
    };
  },
});
</script>

<style scoped>
.todoItem {
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.todoItem p {
  width: 280px;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.todoItem input {
  margin: 0 10px;
}

.todoItem input,
button {
  cursor: pointer;
}
.todoItem div button {
  border: 1px solid grey;
  border-radius: 6px;
  padding: 0px 5px;
  outline: none;
}
.line-through {
  text-decoration: line-through;
  color: #cdcdcd;
}
.doing {
  background-color: #409eff;
  color: #000;
}
.willDo {
  background-color: #e6a23c;
  color: #fff;
}
</style>