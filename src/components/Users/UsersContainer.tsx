import React from "react";
import {
    follow, setCurrentPage, setTotalUsersCount,
    setUsers,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {toggleFollowInProgress, toggleIsFetching} from "../../redux/action";
import { usersAPI} from "../../api/api";

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

}

class UsersContainer extends React.Component<UsersAPIPropsType, AppStateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false)
            })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        // axios.get(
        //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        //     { withCredentials: true }
        //     )
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
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
                    toggleFollowInProgress={toggleFollowInProgress}
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

// let mapDispatchToProps = (dispatch: Dispatch<UsersActionType>) => {
//
//     return {
//         follow: (userId: number) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber:number) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalCount:number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching:boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }

export default connect (mapStateToProps,    {
        follow, //: follow,
        unfollow, //: unfollowActionCreator,
        setUsers, //: setUsersActionCreator,
        setCurrentPage, //: setCurrentPageActionCreator,
        setTotalUsersCount, //: setTotalUsersCountAC,
        toggleIsFetching, //: toggleIsFetchingAC,
        toggleFollowInProgress,
    })(UsersContainer)

