import React from 'react'
import s from './Users.module.css'
import {UsersType} from "../../redux/users-reducer";
import defaultUserPhoto from '../../assets/images/download.jpg';
import { NavLink } from 'react-router-dom';
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

    return (
        <div>
            <div className={s.usersPage}>
                {pages.map(p =>
                    <span className={props.currentPage === p ? s.selectedPage : ''}
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
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>
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