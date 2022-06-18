import React from 'react'
import { useForm } from 'react-hook-form';
import { socket } from '../../service/socket'
import colors from '../../colors'
import Form from '../../ui/Form'
import {
    TextInputStyled,
    SubmitInputStyled,
} from '../../ui/Input'
import Text from '../../ui/Text'

function ChatForm({
    notifications, getMessage, sendMessage,
}) {
    React.useEffect(() => {
        socket.on('message', (message) => {
            getMessage(message)
        })
        return () => {
            socket.off('message', console.log('off'));
        }
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
    });
    return (
        <form
            onSubmit={handleSubmit((formData) => {
                sendMessage(socket, formData)
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
            {notifications.length > 0 && notifications.map((el, index) => el && <Text key={index}>{el.nickname}: {el.message}</Text>)}
        </form>
    )
}

export default ChatForm
