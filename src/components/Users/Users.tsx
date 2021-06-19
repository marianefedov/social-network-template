import React from 'react'
import style from './Users.module.css'
import {UsersType} from "../../redux/users-reducer";
import axios from 'axios'
import defaulteUserPhoto from '../../assets/images/download.jpg'

type UsersPropsType = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response =>  {
                debugger
                this.props.setUsers(response.data.items)
            })
    }

    getUsers = () => {
        debugger
        if (this.props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response =>  {
                    debugger
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render(){
        return (<div>
            <button onClick={this.getUsers}>GET USERS</button>
            {
                this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : defaulteUserPhoto} className={style.userPhoto} alt="photo"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
        </div>)
    }

}


export default Users