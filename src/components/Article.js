import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import "./Article.css"
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
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
                {article.video && <ReactPlayer width={'100%'} url={article.video} />}
                {article.shareImg && <img src={article.shareImg} alt="" />}
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
        </div>
    )
}

export default Article
