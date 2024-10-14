import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"

export const HomePage = (props: { todos: ToDo[] }) => {
    return (
        <div className="container">
            {
                props.todos.map((todo: ToDo, idx: number) => {
                    return (<ListItem todo={todo} key={idx} />)
                })
            }
        </div>
    )
}