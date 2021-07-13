import React from 'react'
import Header from './Header'
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DataType, setAuthUserData, toggleIsFetching} from "../../redux/action";
import Preloader from '../common/Preloader/Preloader';

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    setAuthUserData:(data:DataType) => void
    // follow: (userId: number) => void
    // unfollow: (userId: number) => void
    isFetching:boolean
    toggleIsFetching:(isFetching:boolean) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, AppStateType> {


    componentDidMount() {

        // this.props.isFetching && <Preloader />
        this.props.toggleIsFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                // debugger
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                    this.props.toggleIsFetching(false)
                }
            })
    }

    render () {
        // @ts-ignore
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}/>
    }
}
type MapStateToProps = {
    isAuth: boolean
    login: string | null
    isFetching:boolean
}
const mapStateToProps = (state:AppStateType):MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
})


export default connect(mapStateToProps, {
    setAuthUserData,
    toggleIsFetching
    // @ts-ignore
})(HeaderContainer)

//     follow: (userId: number) => void
//     unfollow: (userId: number) => void