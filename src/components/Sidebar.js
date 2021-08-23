import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

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
                <Avatar
                    src="/images/photo.svg"
                    className='sidebar__avatar'
                >
                    Vincent
                </Avatar>
                <h2>Vincent Nouvian</h2>
                <h4>vincent@gmail.fr</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">
                        2,410
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

export default Sidebar
