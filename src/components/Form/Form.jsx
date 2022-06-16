import React from 'react'
import { useForm } from 'react-hook-form';
import colors from '../../colors'
import Form from '../../ui/Form'
import {
    TextInputStyled,
    SubmitInputStyled,
} from '../../ui/Input'

function ChatForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '2email2@mail.ru',
            password: '1q2w3e4r5',
        },
        mode: 'onBlur',
    });
    return (
        <form
            onSubmit={handleSubmit((formData) => {
                console.log(formData)
            })}
        >
            <Form margin='10px'>
                {errors.nickname && <span>{errors.nickname.message}</span>}
                <TextInputStyled
                    border={colors.main_border}
                    placeholder='Введите имя'
                    {...register(
                        'nickname',
                        {
                            required: 'Введите почту',

                        },
                    )}
                    name="nickname"
                />
                {errors.message && <span>{errors.message.message}</span>}
                <TextInputStyled
                    border={colors.main_border}
                    placeholder='Введите текст'
                    {...register(
                        'message',
                        {
                            required: 'Введите почту',

                        },
                    )}
                    name="message"/>
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
