import React from 'react'
// import s from './../Dialogs.module.css'
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom"

export type DialogsItemPropsType = {
    id: number
    name: string
}

const DialogItem = ({id, name}: DialogsItemPropsType) => {

    let path = `/dialogs/${id}`
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path} activeClassName={s.active}>{name} </NavLink>
        </div>
    )
}
export default DialogItem


