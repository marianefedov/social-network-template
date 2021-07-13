export enum ACTIONS_TYPE {
    //common
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',

    //auth-reducer
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',

    //user-reducer
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',

    //profile-reducer
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',

    //dialogs-reducer
    SEND_MESSAGE = 'SEND-MESSAGE',
    UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',

}

export type ToggleIsFetchingACType = {
    type: typeof ACTIONS_TYPE.TOGGLE_IS_FETCHING
    isFetching:boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingACType => ({
    type: ACTIONS_TYPE.TOGGLE_IS_FETCHING,
    isFetching
})

export type DataType = {
    usersId: string
    email: string
    login: string
}
export type SetAuthUserDataType = {
    type: typeof ACTIONS_TYPE.SET_AUTH_USER_DATA
    data: DataType
}
export const setAuthUserData = (data:DataType):SetAuthUserDataType => ({
    type: ACTIONS_TYPE.SET_AUTH_USER_DATA,
    data
})

