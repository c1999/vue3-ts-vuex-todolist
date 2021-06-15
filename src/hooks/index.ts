import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING } from "@/store/actionTypes";
import { ITodo, TODO_STATUS } from "@/typings"
import { watch } from "vue";
import { Store, useStore } from "vuex"

export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: string) => void;
    setStatus: (id: string) => void;
    setDoing: (id: string) => void;
}
interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;
}
function useTodo(): IUseTodo {
    const store: Store<any> = useStore();
    const { setLocalList, getLocalList }: IUseLocalStorage = useLocalStorage();
    const todoList = getLocalList()
    // 监听数据变化更新localStorage
    watch(()=>{
        return store.state.list;
    }, (todoList)=>{
        console.log('todoList :>> ', todoList);
        setLocalList(todoList);
    })
    // 保存todo
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime().toString(),
            content: value,
            status: TODO_STATUS.WILLD
        }
        // 插入一条
        store.dispatch(SET_TODO, todo)
    }
    // 设置list
    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList)
    }
    function removeTodo(id: string) {
        store.dispatch(REMOVE_TODO, id)
    }
    function setStatus(id: string) {
        store.dispatch(SET_STATUS, id)
    }
    function setDoing(id: string) {
        store.dispatch(SET_DOING, id)
    }
    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}
function useLocalStorage(): IUseLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '')
    }
    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }
    return {
        getLocalList,
        setLocalList
    }
}
export {
    useTodo
}