const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export type DialogsUsersType = {
    id:number
    name: string
}
export type MessagesType = {
    id:number
    message: string
}
export type DialogsReduserStateType = {
    dialogs: DialogsUsersType[]
    messages: MessagesType[]
    newMessageText: string
}
export type DialogsActionType = {
    type: 'SEND-MESSAGE' | 'UPDATE-NEW-MESSAGE-BODY'
    newText: string
}

let initialState: DialogsReduserStateType = {
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

const dialogsReducer = (state = initialState, action: DialogsActionType) => {

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
                newMessageText: action.newText  // stateCopy.newMessageText = action.newText
            }

        default:
            return state
    }

}


export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (text:string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: text
})

export default dialogsReducer