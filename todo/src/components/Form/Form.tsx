import { ChangeEvent } from 'react'
import './Form.scss'
export const Form = () => {

let createText = ''

    const formSubmit = () => {
console.log('submit')
    }

const chahgeText = (event: ChangeEvent<HTMLInputElement>) => {
console.log(event.target.value);
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