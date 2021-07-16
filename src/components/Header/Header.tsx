import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean,
    login: string
    // setAuthUserData: (data:DataType) => void
}

const Header = (props:HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg?compress=1&resize=400x300" alt="logo"/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login :  <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header