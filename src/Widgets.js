import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React is awesome !", "Top news - 9999 readers")}
            {newsArticle("Coronavirus is back", "Top news - 1759 readers")}
            {newsArticle("Is Redux too good?", "Learning - 886 readers")}
            {newsArticle("React formation!", "Learning - 1234 readers")}
        </div>
    )
}

export default Widgets
