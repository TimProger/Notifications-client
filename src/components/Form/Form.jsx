import React from 'react'
import { useForm } from 'react-hook-form';
import colors from '../../colors'
import Form from '../../ui/Form'
import {
    TextInputStyled,
    SubmitInputStyled,
} from '../../ui/Input'
import Text from '../../ui/Text'

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
                <div>
                    {errors.nickname && <Text color={colors.main_error_text}>{errors.nickname.message}</Text>}
                    <TextInputStyled
                        border={colors.main_border}
                        placeholder='Enter your nickname'
                        {...register(
                            'nickname',
                            {
                                required: 'You must enter your nickname',

                            },
                        )}
                        name="nickname"
                    />
                </div>
                <div>
                    {errors.message && <Text color={colors.main_error_text}>{errors.message.message}</Text>}
                    <TextInputStyled
                        border={colors.main_border}
                        placeholder='Enter your message'
                        {...register(
                            'message',
                            {
                                required: 'You must enter your message',

                            },
                        )}
                        name="message"/>
                </div>
                <SubmitInputStyled
                    border={colors.main_border}
                    name="submit"
                >
                    Send a message
                </SubmitInputStyled>
            </Form>
        </form>
    )
}

export default ChatForm
