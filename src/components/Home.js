import styled from "styled-components"
import React from 'react'

import Feed from './Feed'
import Sidebar from './Sidebar'
import Widgets from './Widgets'

import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'

function Home(props) {

    return (
        <Container >
            {!props.user && <Redirect to='/' />}
            <Sidebar />
            <Feed />
            <Widgets />
        </Container>
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
    };
}

export default connect(mapStateToProps)(Home)
