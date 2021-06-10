import { IState, ITodo } from "@/typings";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO } from "./actionTypes";

export default {
    // 插入一条
    [SET_TODO](state: IState, todo: ITodo): void {
        state.list.unshift(todo)
    },
    // 初始化list
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList
    },
    // 删除
    [REMOVE_TODO](state: IState, id: string): void {
        state.list = state.list.filter((item: ITodo) => item.id !== id)
    }
}