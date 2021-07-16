import React from "react";
import {
    follow, getUsers, setCurrentPage, setTotalUsersCount,
    setUsers,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {toggleFollowInProgress, toggleIsFetching} from "../../redux/action";
// import { usersAPI} from "../../api/api";
// import {connect} from 'react-redux'
// import UsersAPIComponent from "./UsersAPIComponent";
// const Users = require("./Users");
const {connect} = require("react-redux");


type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
    followingInProgress: [
        isFetching:boolean,
        userId:number,
    ]
}
type UsersAPIPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
    followingInProgress: [
        isFetching:boolean,
        userId:number,
    ]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (p:number)=> void
    setUsers:(users:UsersType)=>void
    setTotalUsersCount:(totalCount:number)=>void
    setCurrentPage:(pageNumber:number)=>void
    toggleIsFetching:(isFetching:boolean) => void
    getUsers:(currentPage:number, pageSize:number ) => any
}

class UsersContainer extends React.Component<UsersAPIPropsType, AppStateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber:number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                { this.props.isFetching &&  <Preloader/> }
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}


let mapStateToProps = ({usersPage}: AppStateType):MapStatePropsType => {
    const {users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress} = usersPage
    return {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress,
    }
}



export default connect (mapStateToProps,    {
        follow, //: follow,
        unfollow, //: unfollowActionCreator,
        setUsers, //: setUsersActionCreator,
        setCurrentPage, //: setCurrentPageActionCreator,
        setTotalUsersCount, //: setTotalUsersCountAC,
        toggleIsFetching, //: toggleIsFetchingAC,
        toggleFollowInProgress,
        getUsers,
    })(UsersContainer)

