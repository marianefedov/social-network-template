import React from 'react'
import s from './Users.module.css'
import {UsersType} from "../../redux/users-reducer";
import defaultUserPhoto from '../../assets/images/download.jpg';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../api/api";
// import {debuglog} from "util";


type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (p:number)=> void

}

let Users = (props:UsersPropsType) => {
    // debugger
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = []
    for(let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    let followRequest = (userId: number) =>
        usersAPI.followUser(userId)
        // axios.post(
        // `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        // {},
        // {
        //     withCredentials: true,
        //     headers: {
        //         'API-KEY': '98e50b91-2dd1-49a4-9584-a347d63809c1'
        //     }
        // })
            .then(response => {
            if (response.data.resultCode === 0) {
                props.follow(userId)
            }
        })

    let unfollowRequest = (userId:number) => {
        usersAPI.unfollowUser(userId)
        // axios.delete(
        //     `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        //     {
        //         withCredentials: true,
        //         headers: {
        //             'API-KEY': '98e50b91-2dd1-49a4-9584-a347d63809c1'
        //         }
        //     })
            .then(response => {
            if (response.data.resultCode === 0) {
                props.unfollow(userId)
            }
        })
    }

    return (
        <div>
            <div className={s.usersPage}>
                {pages.map(p =>
                    <span  className={props.currentPage === p ? s.selectedPage : ''}
                          onClick={() => props.onPageChanged(p)}
                    >{p}</span>)}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small ? u.photos.small : defaultUserPhoto} className={s.userPhoto}
                                 alt="photo"/>
                        </NavLink>

                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { unfollowRequest(u.id) }}>Unfollow</button>
                            : <button onClick={() => followRequest(u.id) }>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{'u.status'}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}

export default Users