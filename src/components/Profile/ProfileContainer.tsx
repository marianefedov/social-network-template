import React from 'react'
import Profile, {ProfileType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';



type MapStateToPropsType = {
    profile: ProfileType | null
}

type ProfileContainerPropsType = {
    profile: ProfileType
    setUserProfile:(profile:ProfileType) => void
    match: any
    hystory:any
    location:any
}

class ProfileContainer extends React.Component <ProfileContainerPropsType, ProfileType> {

    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }


    render() {

        return (
            <div>
                <Profile setUserProfile={this.props.setUserProfile}  profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = ({profilePage}:AppStateType):MapStateToPropsType => ({
    profile: profilePage.profile
})


// @ts-ignore
let WithUrlDataContainerComp= withRouter(ProfileContainer )

export default connect (mapStateToProps,{
    setUserProfile,
})(WithUrlDataContainerComp);