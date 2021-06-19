const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export type DialogsType = {
    id:number
    name: string
}
export type MessagesType = {
    id:number
    message: string
}
export type DialogsStateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}



let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        { id: 2, name: "Andrey"},
        { id: 3, name: "Victor"},
        { id: 4, name: "Valeri"},
        { id: 5, name: "Sasha"},
        { id: 6, name: "Sveta"},
    ],
    messages:  [
        {id: 1, message: "Hi"},
        { id: 2, message: "How is your it-kamasutraaaaa"},
        { id: 3, message: "What's up?"},
        { id: 4, message: "Yo"},
        { id: 5, message: "Yo"},
        { id: 6, message: "Yo"},
    ],
    newMessageText: '',
}

const dialogsReducer = (state:DialogsStateType = initialState, action: DialogsActionType):DialogsStateType => {

    switch (action.type) {
        case SEND_MESSAGE:

            return  {
                ...state,
                messages: [...state.messages, { id: 7,message: state.newMessageText }],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }

}
//Action Creators
export type DialogsActionType =  SendMessageACType | UpdateNewMessageBodyACType
type SendMessageACType = {
    type: typeof SEND_MESSAGE
}
type UpdateNewMessageBodyACType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY,
    newText: string
}

export const sendMessageCreator = ():SendMessageACType => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (text:string):UpdateNewMessageBodyACType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: text
})

export default dialogsReducer