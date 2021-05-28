import React, {Dispatch} from 'react'
import s from './Dialogs.module.css'
import {
    DialogsReduserStateType,
    DialogsUsersType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {ProfileActionType} from "../../redux/profile-reducer";

type DialogsContainerPropsType = {
    dialogsPage: DialogsReduserStateType

}

let mapStateToProps = ({dialogsPage}: DialogsContainerPropsType) => {
    return {
        dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<any> ) => { // <== any ???? =====?????
    return {
        sendMessage: () => { dispatch(sendMessageCreator()) },
        updateNewMessageBody: (body:string) => { dispatch(updateNewMessageBodyCreator(body)) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer




