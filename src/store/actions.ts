import { IState, ITodo } from '@/typings'
import { Commit } from 'vuex'
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO } from './actionTypes'
interface ICtx {
    commit: Commit,
    state: IState

}
export default {
    // 插入一条
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo)
    },
    // 初始化list
    [SET_TODO_LIST]({ commit }: ICtx, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList)
    },
    // 删除
    [REMOVE_TODO]({ commit }: ICtx, id: string): void {
        commit(REMOVE_TODO, id)
    }
}