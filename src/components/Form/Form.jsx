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
import Flex from '../../ui/Flex'

function ChatForm({
    notifications, getHandler, sendHandler, fetchRemoveMessage, removeHandler,
}) {
    const messages = React.useRef(null)
    React.useEffect(() => {
        socket.on('message', (message) => {
            getHandler(message)
            messages.current.scrollTo(0, messages.current.scrollHeight)
        })
        socket.on('remove', (id) => {
            removeHandler(id)
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
                sendHandler(socket, formData)
            })}
        >
            <Flex width={'100%'} type={'messages'} background={colors.main_background} ref={messages}>
                {notifications.length > 0 && notifications.map((el, index) => {
                    if (el) {
                        return <Text onClick={() => fetchRemoveMessage(socket, el._id)} key={index}>{el.name}: {el.message}</Text>
                    }
                    return null
                })}
            </Flex>
            <Form margin='10px' height='100px'>
                <div>
                    <Flex type={'label'}>
                        <Text color={colors.main_text}>Name</Text>
                        {errors.name && <Text color={colors.main_error_text}>{errors.name.message}</Text>}
                    </Flex>
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
                    <Flex type={'label'}>
                        <Text color={colors.main_text}>Message</Text>
                        {errors.message && <Text color={colors.main_error_text}>{errors.message.message}</Text>}
                    </Flex>
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
