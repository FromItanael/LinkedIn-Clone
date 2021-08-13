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
                <img src='https://linkedguru.fr/wp-content/uploads/2019/11/Capture-d%E2%80%99e%CC%81cran-2019-11-26-a%CC%80-15.52.37.png' alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>Vincent Nouvian</h2>
                <h4>vn.emploi@laposte.net</h4>
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
