import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"



export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {
    // const todos: ToDo[] = [
    //     {
    //         id: 0,
    //         text: 'Первая задача',
    //         isDone: false
    //     },
    //     {
    //         id: 1,
    //         text: 'Вторая задача',
    //         isDone: true
    //     },
    //     {
    //         id: 2,
    //         text: 'Третья задача',
    //         isDone: true
    //     }

    // ]

    const ckeckedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item} key={idx}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    const unCkeckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={idx}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }
    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {ckeckedList()}
            </ul>
            <ul className="todo-list completed">
                {unCkeckedList()}

            </ul>
        </div>
    )
}