import { ChangeEvent } from 'react'
import './Form.scss'
export const Form = (props: { createNewTodo: Function }) => {

    let createText = ''

    const formSubmit = () => {
        if (createText) {
            props.createNewTodo(createText)
        }

    }

    const chahgeText = (event: ChangeEvent<HTMLInputElement>) => {

        createText = event.target.value
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input type="text" onInput={chahgeText} />
                    <button></button>
                </label>
            </form>
        </div>
    )
}