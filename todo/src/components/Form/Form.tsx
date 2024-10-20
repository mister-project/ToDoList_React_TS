import { useState } from 'react'

import { FormBlock, FormField, FormLabel, FormWrapper, FormControl } from './Form.styled'

import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewTodo: Function }) => {
    const [text, setText] = useState<string>('')


    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (text) {
            props.createNewTodo(text)
            setText('')
        }

    }

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        value={text}
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <FormControl icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}