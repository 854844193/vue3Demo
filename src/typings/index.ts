interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS;

}

interface IState {
    list: ITodo[];
}

enum TODO_STATUS {
    WillDo = "willDo",
    Doing = "doing",
    Finish = "Finish",
}

export {
    ITodo,
    IState,
    TODO_STATUS
}