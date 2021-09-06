import { Avatar } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux';
import './Sidebar.css'

function Sidebar(props) {

    const recentItem = (topic) => {
        return (
            < div className="sidebar__recentItem" >
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div >
        )
    };

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src='https://i.pinimg.com/originals/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg' alt='' />
                {props.user && props.user.photoURL ? <Avatar src={props.user.photoURL} alt="" /> : <img src="/images/photo.svg" alt="" />}
                <h2>{props.user.displayName}</h2>
                <h4>Developpeur Web chez ISAGRI</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Vues de votre profil</p>
                    <p className="sidebar__statNumber">
                        126
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Vues de votre post</p>
                    <p className="sidebar__statNumber">
                        424
                    </p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}


export default connect(mapStateToProps)(Sidebar)
