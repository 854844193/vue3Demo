<template>
  <div class="todoItem">
    <input
      type="checkbox"
      :checked="item.status === Finish"
      @click="setStatus(item.id)"
    />
    <span :class="item.status === Finish ? 'line-through' : ''">
      {{ item.content }}
    </span>
    <a-button type="primary" shape="circle" @click="removeTodo(item.id)">
      <template #icon><DeleteOutlined /></template>
    </a-button>
    <button style="margin-left: 10px; background-color: #f56c6c">删除</button>
    <button
      v-if="item.status !== Finish"
      @click="setDoing(item.id)"
      style="margin-left: 10px"
      :class="item.status === Doing ? 'doing' : 'willDo'"
    >
      {{ item.status === Doing ? "正在做..." : "马上做" }}
    </button>
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

<style >
input,
button {
  cursor: pointer;
}
button {
  border: 0.0625rem solid grey;
}
.todoItem {
  margin: 10px 0;
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