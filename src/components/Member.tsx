import React from 'react'
import styled from 'styled-components';

interface MemberProps {
    displayName: string,
    userName: string,
}

export const Member = ({ displayName, userName }: MemberProps) => {
  return (
    <Container>
        <img src='https://avatars.githubusercontent.com/u/60079016' />
        <div>
            <div className='info'>
                <h1>{displayName}</h1>
                <span>{userName}</span>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 12px;

    img {
        height: 52px;
        object-fit: cover;
    }
`