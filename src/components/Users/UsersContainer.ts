import React, {Dispatch} from "react";
import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountAC,
    setUsersActionCreator,
    unfollowActionCreator, UsersActionType,
    UsersType
} from "../../redux/users-reducer";

import {AppStateType} from "../../redux/redux-store";
import UsersAPIComponent from "./UsersAPIComponent";

const Users = require("./Users");
const {connect} = require("react-redux");


type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}


let mapStateToProps = ({usersPage}: AppStateType):MapStatePropsType => {
    const {users, pageSize, totalUsersCount, currentPage} = usersPage
    return {
        users,
        pageSize,
        totalUsersCount,
        currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<UsersActionType>) => {

    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber:number) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer
