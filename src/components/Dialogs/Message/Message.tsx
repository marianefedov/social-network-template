import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    message: string
}

const Message = ({message}: MessagePropsType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}
export default Message


