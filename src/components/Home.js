import Widgets from './Widgets'
import styled from "styled-components"
import React from 'react'
import Header from './Header'
import Feed from './Feed'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'

function Home() {
    return (
        <div>
            <Header />
            <Container >
                <Sidebar />
                <Feed />
                <Widgets />
            </Container>
        </div>
    )
}

const Container = styled.div`
display:flex;
max-width:1128px;
margin:auto;
`
const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}
export default connect(mapStateToProps)(Home)
