import {
    DialogsActionType,
    DialogsStateType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "react";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    state:DialogsStateType
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        state: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch<DialogsActionType> ) => {
    return {
        sendMessage: () => { dispatch(sendMessageCreator()) },
        updateNewMessageBody: (body:string) => { dispatch(updateNewMessageBodyCreator(body)) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer




