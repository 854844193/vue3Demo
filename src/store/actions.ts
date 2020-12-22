import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LTST, REMOVE_TODO, SET_STATUS, SET_DOING } from "./actionTypes";

interface ICtx {
    commit: Commit,
    state?: IState,
}

export default {
    [SET_TODO]({ commit }: ICtx, todo: ITodo) {
        commit(SET_TODO, todo)
    },
    [SET_TODO_LTST]({ commit }: ICtx, todoList: ITodo[]) {
        commit(SET_TODO_LTST, todoList)
    },
    [REMOVE_TODO]({ commit }: ICtx, id: number) {
        commit(REMOVE_TODO, id)
    },
    [SET_STATUS]({ commit }: ICtx, id: number) {
        commit(SET_STATUS, id)
    },
    [SET_DOING]({ commit }: ICtx, id: number) {
        commit(SET_DOING, id)
    }
}