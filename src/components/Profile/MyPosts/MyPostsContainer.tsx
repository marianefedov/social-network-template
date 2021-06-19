import {Dispatch} from 'react'
import {
    addPostActionCreator,
    PostsType, ProfileActionType,
    updateNewPostActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


type MapStatePropsType = {
    posts: PostsType[]
    newPostText: string
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ProfileActionType> ) => {
    return {
        addPost: () => { dispatch(addPostActionCreator()) },
        updateNewPostText: (text:string) => { dispatch(updateNewPostActionCreator(text)) }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer