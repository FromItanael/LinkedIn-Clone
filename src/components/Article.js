import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./Article.css"
import ReactPlayer from 'react-player';

const Article = ({ article }) => {

    const [showBox, setShowBox] = useState(false)

    const handleShowBox = () => {
        setShowBox(true)
    }

    const handleClearBox = () => {
        setShowBox(false)
    }

    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={article.actor.image}>{article.actor.title[0]}</Avatar>
                <div className="post__info">
                    <h2>{article.actor.title}</h2>
                    {/* <p>{article.actor.description}</p> */}
                </div>
            </div>

            <div className="post__body">
                <p>{article.description}</p>
                {!article.shareImg && article.video ? (<ReactPlayer width={'100%'} url={article.video} />) : (article.shareImg && <img src={article.shareImg} alt="" />)}
            </div>


            <div className="post__buttons">
                <div className={`${showBox ? "likeOptions" : "dnone"}`} onMouseEnter={handleShowBox} onMouseLeave={handleClearBox}>
                    <button className="reactions-menu__reaction">
                        <img className="reactions-menu__icon" src="/images/like-reaction-icon.svg" alt="" />
                        <span className="reactions-menu__reaction-description">J'aime</span>
                    </button>
                    <button className="reactions-menu__reaction">
                        <img className="reactions-menu__icon" src="/images/praise-reaction-icon.svg" alt="" />
                        <span className="reactions-menu__reaction-description">Bravo</span>
                    </button>
                    <button className="reactions-menu__reaction">
                        <img className="reactions-menu__icon" src="/images/appreciation-reaction-icon.svg" alt="" />
                        <span className="reactions-menu__reaction-description">Soutien</span>
                    </button>
                    <button className="reactions-menu__reaction">
                        <img className="reactions-menu__icon" src="/images/empathy-reaction-icon.svg" alt="" />
                        <span className="reactions-menu__reaction-description">J'adore</span>
                    </button>
                    <button className="reactions-menu__reaction">
                        <img className="reactions-menu__icon" src="/images/interest-reaction-icon.svg" alt="" />
                        <span className="reactions-menu__reaction-description">Instructif</span>
                    </button>
                    <button className="reactions-menu__reaction">
                        <img className="reactions-menu__icon" src="/images/maybe-reaction-icon.svg" alt="" />
                        <span className="reactions-menu__reaction-description">Intéressant</span>
                    </button>
                </div>
                <div className="inputOption" onMouseEnter={handleShowBox} onMouseLeave={handleClearBox}>
                    <img src="/images/like-icon.svg" alt="" />
                    <h4>J'aime</h4>
                </div>
                <div className="inputOption">
                    <img src="/images/speech-bubble-icon.svg" alt="" />
                    <h4>Commenter</h4>
                </div>
                <div className="inputOption">
                    <img src="/images/share-linkedin-icon.svg" alt="" />
                    <h4>Partager</h4>
                </div>
                <div className="inputOption">
                    <img src="/images/send-privately-icon.svg" alt="" />
                    <h4>Envoyer</h4>
                </div>
            </div>
        </div>
    )
}

export default Article
