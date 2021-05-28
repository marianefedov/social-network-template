import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsReduserStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

export type DialogsPropsType = {
    dialogsPage: DialogsReduserStateType
    sendMessage: ()=> void
    updateNewMessageBody: (body:string) => void
}



const Dialogs = ({dialogsPage, sendMessage, updateNewMessageBody }:DialogsPropsType) => {
    const {dialogs, messages, newMessageText } = dialogsPage
    let dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>)

    let onSendMessageClick = () => {
        sendMessage()
    }

    let onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageBody(e.target.value)
    }


return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               { dialogsElements }
           </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea
                    placeholder='Enter Your Message'
                    value={newMessageText}
                    onChange={onMessageChange}
                    // ref={newMessageElement}
                /></div>
                <div><button onClick={onSendMessageClick}>Send message</button></div>
            </div>

        </div>
    )
}

export default Dialogs


