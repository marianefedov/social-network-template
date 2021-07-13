import React from 'react'
// import s from'./Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {

    // profile: any
    // setUserProfile:(profile:ProfileType) => void
}


const Profile = (props : any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

export type ProfileType = ReturnType<typeof Profile>
export default Profile