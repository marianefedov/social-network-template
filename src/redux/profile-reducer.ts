const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostsType= {
    id: number
    message: string
    likeCounts: number
}
export type ProfileStateType = {
    posts: PostsType[]
    newPostText: string
}

let initialState  =  {
    posts:  [
        {id: 1, message: "Hi, how are you?", likeCounts: 15},
        {id: 2, message: "It`s my first post", likeCounts: 10},
        {id: 3, message: "Blabla", likeCounts: 10},
        {id: 4, message: "DAdA", likeCounts: 10},
    ],
    newPostText: 'hello'
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

        default:
            return state
    }
}


//Action Creators
export type ProfileActionType =
    AddPostActionCreatorType
    | UpdatePostActionCreatorType

type AddPostActionCreatorType =  {
    type: typeof ADD_POST
}
type UpdatePostActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export const addPostActionCreator = ():AddPostActionCreatorType => ({ type: ADD_POST })
export const updateNewPostActionCreator =(text:string):UpdatePostActionCreatorType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer


