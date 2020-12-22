import { SET_TODO, SET_TODO_LTST, REMOVE_TODO, SET_STATUS, SET_DOING } from "@/store/actionTypes";
import { ITodo, TODO_STATUS } from "@/typings"
import { Store, useStore } from "vuex"

export interface IUseTodo {
    setTodo: (val: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}
interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;
}

function useTodo(): IUseTodo {
    const store: Store<any> = useStore();
    const { getLocalList, setLocalList }: IUseLocalStorage = useLocalStorage();
    const todoList: ITodo[] = getLocalList();

    function setTodo(val: string) {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: val,
            status: TODO_STATUS.WillDo
        }
        store.dispatch(SET_TODO, todo)
        setLocalList(store.state.list)
    }

    // 设置todoList
    function setTodoList() {
        store.dispatch(SET_TODO_LTST, todoList);
    }

    // 删除todoItem
    function removeTodo(id: number) {
        store.dispatch(REMOVE_TODO, id);
        setLocalList(store.state.list)
    }


    function setStatus(id: number) {
        console.log("setStatus");
        store.dispatch(SET_STATUS, id);
        setLocalList(store.state.list);
    }

    function setDoing(id: number) {
        console.log("setDoing");
        store.dispatch(SET_DOING, id);
        setLocalList(store.state.list);
        console.log(store.state.list)
    }
    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing,
    }
}

// 存取输入的todoList
function useLocalStorage(): IUseLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem("todoList") || "[]");
    }
    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    return {
        getLocalList, setLocalList
    }
}

export {
    useTodo
}