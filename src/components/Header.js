import React from 'react'
import './Header.css'
import './HeaderOption.css'
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
// import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { signOutAPI } from '../actions';
import { connect } from 'react-redux';
import { ViewComfy } from '@material-ui/icons';

function Header(props) {
    return (
        <div className='header'>
            <div className="global-nav__content">
                <div className="header__left">
                    <img src="/images/linkedin-logo.svg" alt="Logo" />
                    <div className="header__search">
                        <SearchIcon />
                        <input type="text" placeholder="Recherche" />
                    </div>
                </div>

                <nav className="header__right">
                    <HeaderOptions>
                        <li className="global-nav__item">
                            <NavLink >
                                <HomeIcon className='headerOption__icon' />
                                <h3 className='headerOption__title'>Accueil</h3>
                            </NavLink >
                        </li>
                        <li className="global-nav__item">
                            <NavLink>
                                <SupervisorAccountIcon className='headerOption__icon' />
                                <h3 className='headerOption__title'>Réseau</h3>
                            </NavLink >
                        </li>
                        <li className="global-nav__item">
                            <NavLink>
                                <BusinessCenterIcon className='headerOption__icon' />
                                <h3 className='headerOption__title'>Emplois</h3>
                            </NavLink >
                        </li>
                        <li className="global-nav__item">
                            <NavLink>
                                <ChatIcon className='headerOption__icon' />
                                <h3 className='headerOption__title'>Messagerie</h3>
                            </NavLink >
                        </li>
                        <li className="global-nav__item">
                            <NavLink>
                                <NotificationsIcon className='headerOption__icon' />
                                <h3 className='headerOption__title'>Notifications</h3>
                            </NavLink >
                        </li>
                        <li className="global-nav__item">
                            <NavLink
                                onClick={() => props.signOutAPI()}
                                className='headerOption'>
                                {props.user && <img src={props.user.photoURL} className='headerOption__icon rounded' alt="" />}
                                <div className="d-flex">
                                    <h3 className='headerOption__title'>Vous</h3>
                                    <img src="/images/dropdown-icon.svg" alt="" />
                                </div>
                            </NavLink>
                        </li>
                        <li className="global-nav__item">
                            <NavLink className="headerOption__divider">
                                <ViewComfy className='headerOption__icon' />
                                <div className="d-flex">
                                    <h3 className='headerOption__title'>Produits</h3>
                                    <img src="/images/dropdown-icon.svg" alt="" />
                                </div>
                            </NavLink>
                        </li>
                        <li className="global-nav__item">
                            <NavLink className="headerOption__divider">
                                <div className="d-flex">
                                    <h3 className='headerOption__title spotlight'>Essayez Premium gratuitement</h3>
                                </div>
                            </NavLink>
                        </li>
                    </HeaderOptions>
                </nav>
            </div>
        </div >
    )
}

const HeaderOptions = styled.a`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
`


const NavLink = styled.a`
align-items: center;
background: transparent;
color: rgba(0,0,0,0.6);
cursor: pointer;
display: flex;
flex-direction: column;
font-size: 1.2rem;
font-weight: 400;
justify-content: center;
line-height: 1.5;
min-height: 52px;
min-width: 80px;
position: relative;
text-decoration: none;
    &:hover{
        color: rgba(0,0,0,0.9)
    }
`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
    signOutAPI: () => dispatch(signOutAPI()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)
