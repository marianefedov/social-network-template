const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET USERS'

//types
export type UsersStateType = {
    users: UsersType[]
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
    users:  [
        {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZ4gqSFrufbxQYfHaXi2vvPMAjy-z6V2hxQ&usqp=CAU' ,
            followed: true, name: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}, photos: {small: '', large: ''}},
        {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J1yp2ZdeZSin-KeS4nDFfSCh71LUpCLBnyTKf1b0fCrhTN89miX2gEujlv8TwZcQi4E&usqp=CAU' , followed: true, name: 'Oleg', status: 'I am a boss', location: {city: 'Odessa', country: 'Ukraine'}, photos: {small: '', large: ''}},
    ]
}



let usersReducer = (state:UsersStateType = initialState, action: UsersActionType):UsersStateType => {
    let stateCopy;
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
                users: [...state.users, ...action.users]
            }


        default:
            return state
    }
}
//Action Creators
type UsersActionType = FollowACType | UnfollowACType | SetUsersACType
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

export const followActionCreator = (userId:number):FollowACType => ({ type: FOLLOW, userId })
export const unfollowActionCreator = (userId:number) => ({ type: UNFOLLOW, userId })
export const setUsersActionCreator = (users:UsersType[]):SetUsersACType => ({ type: SET_USERS, users})


export default usersReducer


