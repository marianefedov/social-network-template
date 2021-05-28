import React, {Dispatch} from 'react'
import {
    addPostActionCreator,
    AddPostActionCreatorType, PostsType, ProfileActionType,
    ProfileStateType,
    updateNewPostActionCreator,
    UpdatePostActionCreatorType,

} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




type MyPostContainerPropsType = {
   state: {
       profilePage: {
           posts: PostsType[]
           newPostText: string
       }

       posts: PostsType[]
       newPostText: string
       // state: {posts: PostsType[]; newPostText: string}
       // action: ProfileActionType
   }

}

let mapStateToProps = (state: MyPostContainerPropsType) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch<any> ) => { /// <== any ???? =====?????
    return {
        addPost: () => { dispatch(addPostActionCreator()) },
        updateNewPostText: (text:string) => { dispatch(updateNewPostActionCreator(text)) }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer