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
    fullName: string
    status: string
    location: {city: string, country: string}
}
export type ActionType = {
    type: 'FOLLOW' | 'UNFOLLOW' | 'SET USERS'
    userId: number
    users: UsersType[]
}




let initialState:UsersStateType =  {
    users:  [
        {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZ4gqSFrufbxQYfHaXi2vvPMAjy-z6V2hxQ&usqp=CAU' , followed: true, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J1yp2ZdeZSin-KeS4nDFfSCh71LUpCLBnyTKf1b0fCrhTN89miX2gEujlv8TwZcQi4E&usqp=CAU' , followed: true, fullName: 'Oleg', status: 'I am a boss', location: {city: 'Odessa', country: 'Ukraine'}},
        {id: 3, photoUrl: 'http://d17zbv0kd7tyek.cloudfront.net/wp-content/uploads/2015/06/leonardo-dicaprio-fb.jpg' , followed: true, fullName: 'Sasha', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdQn3WqDFnNlVt_8oe_wRnUWG2AiGNf2VCRMJ5mScuFe-_ZUXH2fyixrztmLFLitTxY4&usqp=CAU' , followed: false, fullName: 'Maria', status: 'I am a boss', location: {city: 'Ashdod', country: 'Israel'}}
    ]
}



let usersReducer = (state = initialState, action: ActionType) => {
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

export const followActionCreator = (userId:number) => ({ type: FOLLOW, userId })

export const unfollowActionCreator = (userId:number) => ({ type: UNFOLLOW, userId })

export const setUsersActionCreator = (users:UsersType[]) => ({ type: SET_USERS, users})


export default usersReducer


