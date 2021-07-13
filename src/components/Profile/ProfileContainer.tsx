import React from 'react'
import Profile, {ProfileType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';



type ProfileContainerPropsType = {
    profile: ProfileType
    setUserProfile:(profile:ProfileType) => void
}

type MapStateToPropsType = {
    profile: ProfileType | null

}

class ProfileContainer extends React.Component <any, ProfileType> {

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
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = ({profilePage}:AppStateType):MapStateToPropsType => ({
    profile: profilePage.profile
})


let WithUrlDataContainerComp= withRouter(ProfileContainer )

export default connect (mapStateToProps,{
    setUserProfile,
})(WithUrlDataContainerComp);