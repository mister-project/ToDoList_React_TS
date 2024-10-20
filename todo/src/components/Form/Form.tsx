import { useState } from 'react'

import { Button, FormBlock, Input, Label, Wrapper } from './Form.styled'

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
        <Wrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <Label>
                    <Input
                        value={text}
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Button icon={plusIcon} />
                </Label>
            </FormBlock>
        </Wrapper>
    )
}