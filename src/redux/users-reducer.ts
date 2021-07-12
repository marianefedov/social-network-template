const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

//types
export type UsersStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location?: {city: string, country: string}
    photos: {
        small: string
        large:string
    }
}

let initialState:UsersStateType =  {
    users:  [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

let usersReducer = (state:UsersStateType = initialState, action: UsersActionType):UsersStateType => {
    switch (action.type) {

        case FOLLOW:

           return  {
                ...state,
              users: state.users.map(user => {
                  if (action.userId === user.id) {
                     return  {...user, followed: true}
                  }
                  return user
              })
           }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                    if (action.userId === user.id) {
                        return  {...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }


        default:
            return state
    }
}
//Action Creators
export type UsersActionType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType

type FollowACType = {
    type: typeof FOLLOW
    userId: number
}
type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}
type SetUsersACType = {
    type: typeof SET_USERS,
    users: UsersType[]
}
type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}

export const followActionCreator = (userId:number):FollowACType => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId:number):UnfollowACType => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users:UsersType[]):SetUsersACType => ({ type: SET_USERS, users})
export const setCurrentPageActionCreator = (currentPage:number):SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount:number):SetTotalUsersCountACType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer


