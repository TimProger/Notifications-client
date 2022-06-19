import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import useActions from '../../hooks/useActions';

function ChatFormContainer() {
    const { notifications } = useSelector((state) => state.notif)
    const {
        sendMessage, getMessage, fetchRemoveMessage, removeHandler,
    } = useActions()
    return (
        <Form
            notifications={notifications}
            sendMessage={sendMessage}
            getMessage={getMessage}
            fetchRemoveMessage={fetchRemoveMessage}
            removeHandler={removeHandler}
        />
    )
}

export default ChatFormContainer
