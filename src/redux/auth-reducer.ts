//types
import {ACTIONS_TYPE, SetAuthUserDataType, ToggleIsFetchingACType} from "./action";

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}

let initialState:AuthStateType =  {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

let authReducer = (state:AuthStateType = initialState, action: AuthActionType):AuthStateType => {
    switch (action.type) {

        case ACTIONS_TYPE.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case ACTIONS_TYPE.TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }


        default:
            return state
    }
}
//Action Creators
export type AuthActionType =
    // FollowACType
    // | UnfollowACType
    | SetAuthUserDataType
    | ToggleIsFetchingACType

// type FollowACType = {
//     type: typeof FOLLOW
//     userId: number
// }
// type UnfollowACType = {
//     type: typeof UNFOLLOW
//     userId: number
// }



// export const follow = (userId:number):FollowACType => ({ type: FOLLOW, userId })
// export const unfollow = (userId:number):UnfollowACType => ({ type: UNFOLLOW, userId })

//  const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingACType => ({
//     type: TOGGLE_IS_FETCHING,
//     isFetching
// })

export default authReducer


