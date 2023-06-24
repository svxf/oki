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
                <a className='anchor' href='https://google.com'>https://google.com</a>
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
  /* margin-bottom: 16px; */
  transition: all 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
  padding-bottom: 4px;

    &:hover {
        background: #27223e;
        border-radius: 8px;
    }
`;

const Content = styled.span`
    display: flex;
    flex-direction: column;

    max-width: 54vw;
    width: fit-content;

    word-wrap: break-word;
    white-space: break-spaces;
    line-height: 1.375rem;

    a {
        width: min-content;
    }
    a:hover {
        text-decoration: underline;
    }
`;
