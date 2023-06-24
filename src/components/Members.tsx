import React from 'react'
import styled from 'styled-components'

function Members() {
  return (
    <Container>
        <Head>
            <h1>Members</h1>
            <div>
                <span>4</span>
                <p>4</p>
            </div>
        </Head>
    </Container>
  )
}

export default Members

const Container = styled.div`
    position: relative;
    display: flex;
    width: 15%;
    height: 100%;
    background: #27223e;

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
    background: #322d4b;
    width: 100%;
    height: 60px;
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    justify-content: space-between;
    box-sizing: border-box;

    filter: drop-shadow(0 0 0.55rem #211f35);

    div {
        display: flex;
        flex-direction: row;
        margin-top: auto;
        margin-bottom: auto;
        width: 50px;
        height: 24px;
        border-radius: 8px;
        overflow: hidden;
        span, p {
            margin: auto;
        }
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #8273be;
            width: 50%;

        }
        p {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #6e58c3;
            width: 50%;
        }
    }
`