import { ToDo } from '../../../models/todo-item'
import './ToDoListItem.scss'

export const ToDoListItem = (props: { toDoItem: ToDo }) => {
console.log(props)
    return (
        <li className="todo-list-item__wrapper">
            <span>{props.toDoItem.text}</span>
            <div className="todo-list-item__buttons">
                <button className="btn-trash"></button>
                <button className="btn-check"></button>
            </div>
        </li>
    )
}