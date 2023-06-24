import React from 'react'
import styled from 'styled-components'

import { InfoOutlined, BookmarkBorder, MoreVert, MicNoneOutlined, AttachFileOutlined, SentimentSatisfiedOutlined } from '@mui/icons-material';

import Message from './Message';

function ChatBody() {
  return (
    <Container>
        <Chatbox>
            <input placeholder='Type something'></input>
            <div>
                <MicNoneOutlined />
                <AttachFileOutlined />
                <SentimentSatisfiedOutlined />
            </div>
        </Chatbox>
        
        <Messages>
        {/* displayName, userName, date, content */}
        <Message displayName='birb' userName='svxf' date='Today at 9:31 PM' content='hello' />
        <Message displayName='a rando' userName='stranger' date='Today at 9:31 PM' content='waf' />
        <Message displayName='birb' userName='svxf' date='Today at 9:31 PM' content='https://youtube.com' anchor />
        <Message displayName='steve' userName='steve' date='Today at 9:31 PM' content='2' />
        <Message displayName='steve' userName='steve' date='Today at 9:31 PM' content='https://google.com' code />
        </Messages>
    </Container>
  )
}

export default ChatBody

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 60px);
`
const Chatbox = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    background: #27223e;
    input {
        border-bottom-left-radius: 18px;
        width: 100%;
        background: #3d355c;
        color: #7a6cb3;
        border: none;
        font-size: 1rem;
        padding-inline: 14px;
        outline: 2px solid transparent;
        caret-color: white;
        &::placeholder {
            color: #7a6cb3;
            text-transform: lowercase;
        }
    }

    div {
        height: 100%;
        margin-inline-start: -16px;
        padding-inline-end: 8px;
        background: #3d355c;
        color: #7a6cb3;
        gap: 0.5rem;

        svg {
            height: 100%;
            &:hover {
            background: red;
            }
        }
    }
    
`
const Messages = styled.div`
  display: flex;
  flex-direction: column-reverse!important;
  /* padding: 16px; */
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  height: calc(100% - 100px);
  overflow-y: auto;
  gap: 0rem!important;


  img {
    height: 64px;
    width: 64px;
    border-radius: 8px;
    margin-right: 8px;
  }

  .message-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.5rem;
    /* padding: 8px; */
    
  }

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
    gap: 0.2rem;
    
    h1 {
        margin-right: 6px;
    }

    span {
        color: #7e70b9;
    }
    
  }
  

  span,
  h1 {
    margin: 0;
  }
`;