import { IState, ITodo, TODO_STATUS } from "@/typings";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING } from "./actionTypes";

export default {
    // 插入一条
    [SET_TODO](state: IState, todo: ITodo): void {
        state.list = [todo, ...state.list]
    },
    // 初始化list
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList
    },
    // 删除
    [REMOVE_TODO](state: IState, id: string): void {
        state.list = state.list.filter((item: ITodo) => item.id !== id)
    },
    // 修改状态
    [SET_STATUS](state: IState, id: string): void {
        state.list = state.list.map((item: ITodo) => {
            if (item.id === id) {
                switch (item.status) {
                    case TODO_STATUS.FINISHED:
                        item.status = TODO_STATUS.WILLD
                        break;
                    case TODO_STATUS.WILLD:
                    case TODO_STATUS.DOING:
                        item.status = TODO_STATUS.FINISHED
                    default:
                        break
                }
            }
            return item;
        })
    },
    [SET_DOING](state: IState, id: string): void {
        state.list = state.list.map((item: ITodo) => {
            if (item.id !== id) {
                if(item.status === TODO_STATUS.DOING){
                    item.status = TODO_STATUS.WILLD
                }
            } else {
                item.status = item.status === TODO_STATUS.DOING ? TODO_STATUS.WILLD : TODO_STATUS.DOING
            }
            return item;
        })
    }
}