import React from 'react'
import Form from '../../ui/Form'
import {
    TextInputStyled,
    SubmitInputStyled,
} from '../../ui/Input'

function ChatForm() {
    return (
        <form>
            <Form margin='10px'>
                <TextInputStyled name="nickname" placeholder='Введите имя'/>
                <TextInputStyled name="message" placeholder='Введите текст'/>
                <SubmitInputStyled name="submit" />
            </Form>
        </form>
    )
}

export default ChatForm
