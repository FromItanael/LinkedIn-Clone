import styled from "styled-components"


const PostModal = (props) => {
    return <Container>
        <Content>
            <Header>
                <h2>Créer un post</h2>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                        <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                    </svg>
                </button>
            </Header>
            <SharedContent>
                <UserInfo>
                    <img src="/images/user.svg" alt="" />
                    <InfoContainer>
                        <span>Name</span>
                        <SharePreference>
                            <img src="/images/world-icon.svg" alt="" />
                            <span>Tout le monde</span>
                            <img src="/images/dropdown-icon.svg" alt="" />
                        </SharePreference>
                    </InfoContainer>
                </UserInfo>
                <SharePost>
                    De quoi souhaitez-vous discuter ?
                </SharePost>
            </SharedContent>
            <SharedCreation>
                <AttachAssets>
                    <AssetButton>
                        <img src="/images/share-image.svg" alt="" />
                    </AssetButton>
                    <AssetButton>
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
                    <PostButton disabled='true'>
                        Publier
                    </PostButton>
                </AttachAssets>
            </SharedCreation>
        </Content>
    </Container>
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
        height:40px;
        width:40px;
        min-width:auto;
        color:rgba(0,0,0, 0.15);
        svg{
            height:1.5rem;
            width:1.5rem;
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

const SharePost = styled.textarea`
    color: rgba(0, 0, 0, 0.9);
    font-size:1rem;
    margin:8px 0;
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
    background:rgba(0,0,0,0.08);
    border-radius:50px;
    color:rgba(0,0,0,0.3);
    font-size:0.9rem;
    font-weight:600;
    min-width:60px;
    min-height:30px;
    padding:6px 16px;
    cursor:not-allowed;
    &:not(:disabled){
        background: #0a66c2;
        color:white;
        &:hover{
            background:#004182;
        }
    }
`;

export default PostModal;