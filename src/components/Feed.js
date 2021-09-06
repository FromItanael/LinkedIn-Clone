import React, { useState, useEffect } from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption';
import Article from './Article';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import PostModal from './PostModal';
import { getArticlesAPI } from "../actions"

function Feed(props) {

    useEffect(() => {
        props.getArticles();
    }, [])

    const [showModal, setShowModal] = useState("close");
    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        switch (showModal) {
            case "open":
                setShowModal("close");
                break;
            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }
    }

    return (
        <>
            <div className="feed">
                <div className="feed__inputContainer">
                    <div className="feed__inputLine">
                        {props.user && props.user.photoURL ? <Avatar src={props.user.photoURL} alt="" /> : <img src="/images/user.svg" alt="" />}
                        <div className="feed__input">
                            <CreateIcon />
                            <form >
                                <input onClick={handleClick}
                                    disabled={props.loading ? true : false}
                                    type="text" placeholder="Commencer un post" />
                            </form>
                        </div>
                    </div>
                    <div className="feed__InputOptions">
                        <div className="inputOption">
                            <img src="/images/image-icon.svg" alt="" />
                            <h4>Photo</h4>
                        </div>
                        <div className="inputOption">
                            <img src="/images/video-icon.svg" alt="" />
                            <h4>Vidéo</h4>
                        </div>
                        <div className="inputOption">
                            <img src="/images/calendar-icon.svg" alt="" />
                            <h4>Événement</h4>
                        </div>
                        <div className="inputOption">
                            <img src="/images/content-left-align-icon.svg" alt="" />
                            <h4>Rédiger un article</h4>
                        </div>
                    </div>
                    <PostModal showModal={showModal} closeModal={handleClick} />
                </div>
                {props.loading && <div className="align-center" ><img src="/images/spin-loader.svg" alt="" /></div>}

                {/* Articles */}
                {props.articles.length === 0 ?
                    <p>Il n'y a pas d'article</p>
                    :
                    <>
                        {props.articles.map((article, key) => (
                            <Article key={key}
                                article={article}
                            />

                        ))}
                    </>
                }
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
        loading: state.articleState.loading,
        articles: state.articleState.articles,
    }
}

const mapDispatchToPros = (dispatch) => ({
    getArticles: () => dispatch(getArticlesAPI()),
})

export default connect(mapStateToProps, mapDispatchToPros)(Feed)