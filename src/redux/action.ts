import {UsersType} from "./users-reducer";

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
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS',

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

export type SetUsersACType = {
    type: typeof ACTIONS_TYPE.SET_USERS,
    users: UsersType[]
}
export const setUsers = (users:UsersType[]):SetUsersACType =>
    ({ type: ACTIONS_TYPE.SET_USERS, users})

export type SetTotalUsersCountACType = {
    type: typeof ACTIONS_TYPE.SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount:number):SetTotalUsersCountACType =>
        ({type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT, totalUsersCount})

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

export type ToggleFollowInProgressType = {
    type: typeof ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching:boolean
    userId:number
}
export const toggleFollowInProgress = (isFetching:boolean, userId:number):ToggleFollowInProgressType => ({
    type: ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

