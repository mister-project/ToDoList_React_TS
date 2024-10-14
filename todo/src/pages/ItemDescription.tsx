import { useEffect } from "react"
import { ToDo } from "../models/todo-item"
import { useParams } from "react-router-dom"

interface ComponentProps {
    todos: ToDo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {
    const { id } = useParams()

    useEffect(() => {
        console.log(id);

    })

    return (
        <div className="container">
            <h1>Название</h1>
        </div>
    )
} 