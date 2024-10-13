import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDolist"
import { ToDo } from "../models/todo-item"

export const ToDoListPage = () => {
    const todos: ToDo[] = [
        {
            id: 0,
            text: 'Первая задача',
            isDone: false
        },
        {
            id: 1,
            text: 'Вторая задача',
            isDone: true
        },
        {
            id: 2,
            text: 'Третья задача',
            isDone: true
        }

    ]

    const createNewTodo = (text: string) => {
        console.log(text)
    }

    return (
        <>
            <Header />
            <Form createNewTodo={createNewTodo} />
            <ToDoList todos={todos} />
        </>

    )
}