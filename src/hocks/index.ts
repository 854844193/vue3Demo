import { SET_TODO } from "@/store/actionTypes";
import { ITodo, TODO_STATUS } from "@/typings"
import { Store, useStore } from "vuex"

export interface IUseTodo {
    setTodo: (val: string) => void;
    setTodoList: () => void;
    removeTodo: () => void;
    setStatus: () => void;
    setDoing: () => void;
}
function useTodo(): IUseTodo {
    const store: Store<any> = useStore();

    function setTodo(val: string) {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: val,
            status: TODO_STATUS.WillDo
        }
        store.dispatch(SET_TODO, todo)
    }
    function setTodoList() { }
    function removeTodo() { }
    function setStatus() { }
    function setDoing() { }
    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing,
    }
}

export {
    useTodo
}