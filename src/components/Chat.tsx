import React from 'react'
import styled from 'styled-components'

import { InfoOutlined, BookmarkBorder, MoreVert, MicNoneOutlined, AttachFileOutlined, SentimentSatisfiedOutlined } from '@mui/icons-material';
import ChatBody from './ChatBody';

function Chat() {
  return (
    <Container>
        <Head>
            <div>
                <h1>#</h1>
                <h1>Security</h1>
            </div>
            <div>
                <InfoOutlined/>
                <BookmarkBorder/>
                <MoreVert/>
            </div>
        </Head>
        <ChatBody />
    </Container>
  )
}

export default Chat

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* width: 55%; */
    width: 1185px;
    height: 100%;
    background: #2e2946;
    border-bottom-left-radius: 36px;
    z-index: 2;

    div {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    h1 {
        font-size: 1rem;
        width: max-content;
        margin-top: auto;
        margin-bottom: auto;
    }
    svg {
        margin-top: auto;
        margin-bottom: auto;
        height: 1.2rem;
    }
`
const Head = styled.div`
    display: flex;
    background: #3b3659;
    width: 100%;
    height: 60px;
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    justify-content: space-between;
    box-sizing: border-box;
    filter: drop-shadow(0 0 0.55rem #211f35);
    z-index: 2;
`