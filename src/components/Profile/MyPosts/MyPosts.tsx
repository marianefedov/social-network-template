import React, {RefObject} from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, PostsType, updateNewPostActionCreator} from "../../../redux/profile-reducer";

export type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (text:string) => void
    addPost: () => void
}


const MyPosts = ({posts, newPostText, updateNewPostText, addPost }: MyPostsPropsType) => {


    let postsElements = posts.map(p =>
        <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
       addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        text && updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}  value={newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

           <div className={s.posts}>
               { postsElements }
           </div>
        </div>
    )
}

export default MyPosts