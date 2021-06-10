interface IState {
    list: ITodo[]
}
interface ITodo {
    id: string,
    content: string,
    status: TODO_STATUS
}
enum TODO_STATUS {
    WILLD = 'willdo',
    DOING = 'doing',
    FINISHED = 'finished'
}

export {
    IState,
    ITodo,
    TODO_STATUS
}