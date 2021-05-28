import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg?compress=1&resize=400x300" alt="logo"/>
        </header>
    )
}

export default Header