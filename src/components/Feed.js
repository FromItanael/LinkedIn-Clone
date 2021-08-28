import React, { useState, useEffect } from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from '../firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import PostModal from './PostModal';

function Feed(props) {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
            )
        )
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: props.user.displayName,
            description: 'this is a test',
            message: input,
            photoUrl: props.user.photoURL || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__inputLine">
                    {props.user.photoURL ? <Avatar src={props.user.photoURL} alt="" /> : <img src="/images/user.svg" alt="" />}
                    <div className="feed__input">
                        <CreateIcon />
                        <form >
                            <input value={input} type="text" onChange={handleChange} placeholder="Commencer un post" />
                            <button
                                onClick={sendPost}
                                type="submit">Send</button>
                        </form>
                    </div>
                </div>
                <div className="feed__InputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
                <PostModal />
            </div>

            {/* Posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

export default connect(mapStateToProps)(Feed)