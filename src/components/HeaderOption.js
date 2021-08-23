import React from 'react'
import { connect } from 'react-redux'
import './HeaderOption.css'

function HeaderOption({ user, avatar, Icon, title }) {

    const Img = () => {
        if (user && user.photoURL) {
            return <img src={user.photoURL}
                className='headerOption__icon' alt="" />
        } else {
            return <img src="/images/user.svg"
                className='headerOption__icon' alt="" />
        }
    }

    return (
        <div
            //onClick={onClick}
            className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && <Img />}
            <h3 className='headerOption__title'>{title}</h3>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}


export default connect(mapStateToProps)(HeaderOption)
