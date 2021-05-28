import React from 'react'
import style from './Users.module.css'
import {UsersType} from "../../redux/users-reducer";

type UsersPropsTYpe = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

let Users = ({users, follow, unfollow, setUsers}: UsersPropsTYpe) => {
    return <div>
        {
            users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto}  alt="photo"/>
                    </div>
                    <div>
                        {/*{u.followed ? <button onClick={ () => {*/}
                        {/*    follow(u.id)*/}
                        {/*} >Followed</button> :  <button>Unfollow</button> }*/}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users