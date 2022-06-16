import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import useActions from '../../hooks/useActions';

function ChatFormContainer() {
    const { notifications, error, loading } = useSelector((state) => state.notif)
    const { fetchPosts1 } = useActions()
    return (
        <Form
            notifications={notifications}
            error={error}
            loading={loading}
            fetchPosts1={fetchPosts1}
        />
    )
}

export default ChatFormContainer
