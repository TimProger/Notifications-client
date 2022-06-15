import React from 'react'

function Form() {
    return (
        <form>
            <input type="text" name="message" placeholder='Введите текст'/>
            <button type='submit'>Отправить уведомление</button>
        </form>
    )
}

export default Form
