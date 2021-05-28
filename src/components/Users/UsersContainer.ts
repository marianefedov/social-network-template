import React, {Dispatch} from "react";
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    UsersStateType, UsersType
} from "../../redux/users-reducer";
import Users from "./Users";

// const Users = require("./Users");
const {connect} = require("react-redux");

type UsersContainerPropsType = {
    usersPage: UsersStateType
}

const mapStateToProps = ({usersPage}: UsersContainerPropsType) => {
    const {users} = usersPage
    return {
        users
    }
}

let mapDispatchToProps = (dispatch: Dispatch<any>) => {

    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
