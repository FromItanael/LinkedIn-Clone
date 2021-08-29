import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import styled from "styled-components"


const PostModal = (props) => {

    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");
    const handleChange = (e) => {
        const image = e.target.files[0];

        console.log(image)
        if (image === '' || image === undefined) {
            alert(`Ce n'est pas une image, le fichier est un ${typeof image}`);
            return;
        }
        setShareImage(image);
    }

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    }

    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.closeModal(e)
    };

    return (
        <>
            {props.showModal === 'open' &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Créer un post</h2>
                            <button onClick={(e) => reset(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                    <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                                </svg>
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                {props.user.photoURL ? <img src={props.user.photoURL} alt="" /> : <img src="/images/user.svg" alt="" />}
                                <InfoContainer>
                                    <span>{props.user.displayName}</span>
                                    <SharePreference>
                                        <img src="/images/world-icon.svg" alt="" />
                                        <span>Tout le monde</span>
                                        <img src="/images/dropdown-icon.svg" alt="" />
                                    </SharePreference>
                                </InfoContainer>
                            </UserInfo>
                            <SharePost>
                                <textarea value={editorText}
                                    placeholder="De quoi souhaitez-vous discuter ?"
                                    focus="true"
                                    onChange={(e) => setEditorText(e.target.value)} />
                                {assetArea === 'image' ?
                                    (<UploadImage>
                                        <input type="file"
                                            accept="image/gif, image/jpeg,image/png"
                                            name="image"
                                            id="file"
                                            style={{ display: "none" }}
                                            onChange={handleChange}
                                        />
                                        <p>
                                            <label htmlFor="file">Ajouter une photo</label>
                                        </p>
                                        {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}

                                    </UploadImage>)
                                    : (
                                        assetArea === "media" && (
                                            <>
                                                <input type="text"
                                                    placeholder="Insérer le lien d'une video"
                                                    value={videoLink}
                                                    onChange={e => setVideoLink(e.target.value)} />
                                                {videoLink && <ReactPlayer width={'100%'} url={videoLink} />}
                                            </>
                                        )
                                    )
                                }
                            </SharePost>
                        </SharedContent>
                        <SharedCreation>
                            <AttachAssets>
                                <AssetButton onClick={() => switchAssetArea("image")}>
                                    <img src="/images/share-image.svg" alt="" />
                                </AssetButton>
                                <AssetButton onClick={() => switchAssetArea("media")}>
                                    <img src="/images/share-video.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/share-document.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/share-recruits.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/share-celebrate.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/create-survey.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/add-options.svg" alt="" />
                                </AssetButton>
                                <ShareComment>
                                    <AssetButton>
                                        <img src="/images/share-comment.svg" alt="" />
                                        <span>Tout le monde</span>
                                    </AssetButton>
                                </ShareComment>
                                <PostButton disabled={!editorText ? true : false}>
                                    Publier
                                </PostButton>
                            </AttachAssets>
                        </SharedCreation>
                    </Content>
                </Container>
            }
        </>)
};

const Container = styled.div`
    position: fixed;
    top : 0;
    left:0;
    right:0;
    bottom:0;
    z-index:9999;
    color : black;
    background-color: rgba(0, 0,0, 0.8);
    animation: fadeIn 0.3s;
`;

const Content = styled.div`
    width:100%;
    max-width:552px;
    background-color:white;
    max-height:90%;
    overflow: initial;
    border-radius:5px;
    position:relative;
    display:flex;
    flex-direction:column;
    top: 32px;
    margin : 0 auto;
`;

const Header = styled.div`
    display:block;
    padding: 1rem 1.2rem;
    border-bottom: 1px solid rgba(0,0,0, 0.15);
    font-size:16px;
    line-height:1.5;
    color:rgba(0,0,0, 0.6);
    font-weight:400;
    display:flex;
    justify-content:space-between;
    align-items:center;
    button {
        color:rgba(0,0,0, 0.15);
        height:40px;
        min-width:auto;
        width:40px;
        svg{
            height:1.5rem;
            width:1.5rem;
            pointer-events:none;
        }
        &:hover{
            cursor: pointer;
            background-color:rgba(0,0,0,0.08);
            color:rgba(0,0,0,0.6);
            border-radius:25px;
        }        
    }
`;

const SharedContent = styled.div`
    display:flex;
    flex-direction: column;
    flex-grow:1;
    overflow-y:auto;
    vertical-align:baseline;
    background:transparent;
    padding:8px 12px;
`;

const UserInfo = styled.div`
    display:flex;
    align-items:center;
    padding:12px 24px;
    svg, img {
        width:48px;
        height:48px;
        background-clip:content-box;
        border:2px solid transparent;
        border-radius:50%
    }
    span {
        font-weight:600;
        font-size:16px;
        line-height:1.5;
        margin-left:5px;
    }
`;

const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

const SharePreference = styled.div`
    display:flex;   
    justify-content:center;
    align-items:center;
    padding:2px 12px;
    border-radius:25px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    color: rgba(0, 0, 0, 0.6);
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    transition-property: background-color,box-shadow;
    img{
        width:16px;
        height:16px;
    }
    &:hover{
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
        background-color:rgba(0,0,0,0.08);
    }
`;

const SharePost = styled.div`
    color: rgba(0, 0, 0, 0.9);
    font-size:1rem;
    margin:8px 0;
    textarea {
        min-height:100px;
        resize:none;
        width:100%;
    }
    input {
        width:100%;
        height:35px;
        font-size:16px;
        margin-bottom:20px;
    }
`;

const SharedCreation = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 4px 12px;
`;

const AssetButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    height:40px;
    min-width:auto;
    &:hover{
        background-color: rgba(0,0,0,0.08);
    }
`;

const AttachAssets = styled.div`
    display:flex;
    align-items:center;
    padding-right:8px;
    ${AssetButton} {
        width:40px;
    }
`;

const ShareComment = styled.div`
    border-left:1px solid rgba(0,0,0,0.15);
    margin-right:4px;
    padding-left:8px;
    ${AssetButton} {
        border-radius:25px;
        color:rgba(0,0,0,0.6);
        font-size:72.5%;
        font-weight:600;
        height:30px;
        padding:5px 12px;
        width:initial;
        img {
            margin-right:5px
        }
    }
`;

const PostButton = styled.button`
    background:${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#0a66c2")};
    border-radius:50px;
    color:${(props) => (props.disabled ? "rgba(0,0,0,0.3)" : "white")};
    font-size:0.9rem;
    font-weight:600;
    min-width:60px;
    min-height:30px;
    padding:6px 16px;
    cursor:${(props) => (props.disabled ? "not-allowed;" : "pointer")};    
    &:hover{
        background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
    }            
`;

const UploadImage = styled.div`
    text-align: center;
    img {
        width:100%;
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(PostModal);