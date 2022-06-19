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
    notifications, getMessage, sendMessage, fetchRemoveMessage,
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
                    {errors.name && <Text color={colors.main_error_text}>{errors.name.message}</Text>}
                    <TextInputStyled
                        border={colors.main_border}
                        placeholder='Enter your name'
                        {...register(
                            'name',
                            {
                                required: 'You must enter your name',

                            },
                        )}
                        name="name"
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
            {notifications.length > 0 && notifications.map((el, index) => {
                if (el) {
                    return <Text onClick={() => fetchRemoveMessage(el._id)} key={index}>{el.name}: {el.message}</Text>
                }
                return null
            })}
        </form>
    )
}

export default ChatForm
