import { useState } from "react"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDolist"
import { ToDo } from "../models/todo-item"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { createAction } from "../feature/todoList"

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()


    const createNewTodo = (text: string) => {
       dispatch(createAction(text))
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodos)
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
        setTodos(newTodos)
    }

    return (
        <>
            <Form createNewTodo={createNewTodo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>

    )
}