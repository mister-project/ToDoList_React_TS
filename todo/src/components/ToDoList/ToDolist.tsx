import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"



export const ToDoList = () => {
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
    }

]

    const todo1: ToDo = {
        id: 0,
        text: 'Первая задача',
        isDone: false
    }

    const todo2: ToDo = {
        id: 1,
        text: 'Вторая задача',
        isDone: true
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {
                    todos
                    .filter((item) => !item.isDone)
                    .map((item, idx) => {
                        return (
                            <ToDoListItem toDoItem={item} key={idx}/>
                        )
                    })
                }               
            </ul>
            <ul className="todo-list completed">
            {
                    todos
                    .filter((item) => item.isDone)
                    .map((item, idx) => {
                        return (
                            <ToDoListItem toDoItem={item} key={idx}/>
                        )
                    })
                }
              
            </ul>
        </div>
    )
}