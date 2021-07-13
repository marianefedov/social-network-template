import {ProfileType} from "../components/Profile/Profile";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type PostsType= {
    id: number
    message: string
    likeCounts: number
}
export type ProfileStateType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType | null
}

let initialState  =  {
    posts:  [
        {id: 1, message: "Hi, how are you?", likeCounts: 15},
        {id: 2, message: "It`s my first post", likeCounts: 10},
        {id: 3, message: "Blabla", likeCounts: 10},
        {id: 4, message: "DAdA", likeCounts: 10},
    ],
    newPostText: 'hello',
    profile: null,
}



const profileReducer = (state:ProfileStateType = initialState, action: ProfileActionType):ProfileStateType => {
    switch (action.type) {

        case ADD_POST:

           return  {
                ...state,
               posts: [...state.posts, { id: 5, message: state.newPostText, likeCounts: 0 }],
                newPostText: '' //stateCopy.newPostText = ''
           }

        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return  {
                ...state, profile: action.profile
            }

        default:
            return state
    }
}


//Action Creators
export type ProfileActionType =
    AddPostActionCreatorType
    | UpdatePostActionCreatorType
    | SetUserProfileType


type AddPostActionCreatorType =  {
    type: typeof ADD_POST
}
type UpdatePostActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const addPostActionCreator = ():AddPostActionCreatorType => ({ type: ADD_POST })
export const updateNewPostActionCreator =(text:string):UpdatePostActionCreatorType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile:ProfileType) =>({
    type: SET_USER_PROFILE,
    profile
})

export default profileReducer


