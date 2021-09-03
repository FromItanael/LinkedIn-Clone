import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Article.css"
import ReactPlayer from 'react-player';

const Article = ({ article }) => {

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
                <div className="inputOption">
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
