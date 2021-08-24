import React from 'react'
import { connect } from 'react-redux'
import { signOutAPI } from '../actions'
import './HeaderOption.css'

function HeaderOption(props) {

    const Img = () => {
        if (props.user && props.user.photoURL) {
            return <img src={props.user.photoURL}
                className='headerOption__icon' alt="" />
        } else {
            return <img src="/images/user.svg"
                className='headerOption__icon' alt="" />
        }
    }

    return (
        <div
            onClick={() => props.signOutAPI()}
            className='headerOption'>
            {props.Icon && <props.Icon className='headerOption__icon' />}
            {props.avatar && <Img />}
            <h3 className='headerOption__title'>{props.title}</h3>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    signOutAPI: () => dispatch(signOutAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderOption)
