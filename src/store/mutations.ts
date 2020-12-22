import { IState, ITodo, TODO_STATUS } from "@/typings";
import { SET_TODO, SET_TODO_LTST, REMOVE_TODO, SET_STATUS, SET_DOING } from "./actionTypes";

export default {
    [SET_TODO](state: IState, todo: ITodo): void {
        state.list.unshift(todo);
    },
    [SET_TODO_LTST](state: IState, todoList: ITodo[]): void {
        state.list = todoList;
    },
    [REMOVE_TODO](state: IState, id: number): void {
        state.list = state.list.filter((item: ITodo) => item.id !== id);
    },
    [SET_STATUS](state: IState, id: number): void {
        state.list.map((item: ITodo) => {
            if (item.id === id) {
                switch (item.status) {
                    case TODO_STATUS.Finish:
                        item.status = TODO_STATUS.WillDo;
                        break;
                    case TODO_STATUS.WillDo:
                    case TODO_STATUS.Doing:
                        item.status = TODO_STATUS.Finish;
                        break;
                    default:
                        break;
                }
            }
            return item;
        });
    },
    [SET_DOING](state: IState, id: number): void {
        state.list.map((item: ITodo) => {
            if (item.id === id) {
                switch (item.status) {
                    case TODO_STATUS.WillDo:
                        item.status = TODO_STATUS.Doing;
                        break;
                    case TODO_STATUS.Doing:
                        item.status = TODO_STATUS.WillDo;
                        break;
                    default:
                        break;
                }
            }
            return item
        });
    },
}