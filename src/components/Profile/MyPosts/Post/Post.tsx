import React from 'react'
import s from './Post.module.css'

export type PostPropsType = {
    message: string
    likeCounts: number
}

const Post = ({message, likeCounts}: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lA7n3Qg8rIYrvNN9wWGJjRW25Qbc6xn4fg&usqp=CAU" alt="ava"/>
            { message }
            <div>
                <span>like { likeCounts} </span>
            </div>

        </div>
    )
}

export default Post
