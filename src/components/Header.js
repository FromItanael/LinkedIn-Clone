import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { signOutAPI } from '../actions';
import { connect } from 'react-redux';

function Header(props) {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="/images/linkedin-logo.svg" alt="Logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                {/* <div className='headerOption'>
                    <props.Icon className='headerOption__icon' />
                    <h3 className='headerOption__title'>{props.title}</h3>
                </div > */}
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                {/* <div className='headerOption'>
                    <props.Icon className='headerOption__icon' />
                    <h3 className='headerOption__title'>{props.title}</h3>
                </div > */}
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                {/* <div className='headerOption'>
                    <props.Icon className='headerOption__icon' />
                    <h3 className='headerOption__title'>{props.title}</h3>
                </div > */}
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                {/* <div className='headerOption'>
                    <props.Icon className='headerOption__icon' />
                    <h3 className='headerOption__title'>{props.title}</h3>
                </div > */}
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                {/* <div className='headerOption'>
                    <props.Icon className='headerOption__icon' />
                    <h3 className='headerOption__title'>{props.title}</h3>
                </div > */}
                {/* <HeaderOption
                    onClick={() => props.signOutAPI()}
                    avatar={true}
                    title="Vous"
                /> */}
                <div
                    onClick={() => props.signOutAPI()}
                    className='headerOption'>
                    {props.user && <img src={props.user.photoURL} className='headerOption__icon rounded' alt="" />}
                    <div className="d-flex">
                        <h3 className='headerOption__title'>Vous</h3>
                        <img src="/images/dropdown-icon.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Header)
