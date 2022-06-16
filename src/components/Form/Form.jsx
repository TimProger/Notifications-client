import React from 'react'
import colors from '../../colors'
import Form from '../../ui/Form'
import {
    TextInputStyled,
    SubmitInputStyled,
} from '../../ui/Input'

function ChatForm() {
    return (
        <form>
            <Form margin='10px'>
                <TextInputStyled
                    border={colors.main_border}
                    name="nickname"
                    placeholder='Введите имя'
                />
                <TextInputStyled
                    border={colors.main_border}
                    name="message"
                    placeholder='Введите текст'
                />
                <SubmitInputStyled
                    border={colors.main_border}
                    name="submit"
                >
                    Отправить сообщение
                </SubmitInputStyled>
            </Form>
        </form>
    )
}

export default ChatForm
