import React from 'react'
import styled from 'styled-components'

interface MessageProps {
    displayName: string;
    userName: string;
    date: string;
    content: string;
}

function Message({ displayName, userName, date, content }: MessageProps) {
    return (
    <Container>
        <img src='https://avatars.githubusercontent.com/u/60079016' />
        <div className="message-content">
        <div className="info">
            <h1>{displayName}</h1>
            <span>@{userName}</span>
            <span>•</span>
            <span>{date}</span>
        </div>
        <Content>
            {content}
            {/* <code className='inline'>https://test.com/</code>
            <a className='anchor'>https://google.com</a>
            hello
            what is up
            it is meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
        </Content>
        </div>
    </Container>
  )
}

export default Message

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const Content = styled.span`
    display: flex;
    flex-direction: column;

    max-width: 54vw;
    width: fit-content;

    word-wrap: break-word;
    white-space: break-spaces;
    line-height: 1.375rem;
`;
