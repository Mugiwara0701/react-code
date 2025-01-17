import { useContext, createContext } from "react";


export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: false
        }
    ],
    addToDo: (todo) => {},
    updateToDo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(ToDoContext)
}


export const ToDoProvider = ToDoContext.Provider