import React, { useState } from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom';

import { MoreVert, Add, VideocamOutlined } from '@mui/icons-material';
import Directory from './Sidebar/Directory';
import Servers from './Sidebar/Servers';

function Sidebar() {
  return (
    <Container>
        <Directory />
        <Servers />
        <Channels>
            <Head>
                <h1>O.<span style={{ color: '#a79af1' }}>KI</span></h1>
                <MoreVert
                />
            </Head>
            <Hold>
                <span>
                    <h1>Rooms</h1>
                    <Add />
                </span>
                <ul>
                    <Channel isActive={false}>General</Channel>
                    <Channel isActive={false}>DevOps</Channel>
                    <Channel isActive={true}>Security</Channel>
                    <Channel isActive={false}>Testing</Channel>
                </ul>

                <span>
                    <h1>Portals</h1>
                    <Add />
                </span>
                <ul>
                    <Portal>portal-test-1</Portal>
                    <Portal>portal-test-2</Portal>
                </ul>
            </Hold>
        </Channels>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
    position: relative;
    display: flex;
    /* width: 30%; */
    /* width: 565px; */
    height: 100%;
    position: relative;

    &::before {
        position: absolute;
        bottom: 0;
        left: 65px;
        content: "";
        width: 70px;
        height: 70px;
        background: #1b1a2c;
        z-index: 1;
    }
    &::after {
        position: absolute;
        bottom: 0;
        left: 145px;
        content: "";
        width: 70px;
        height: 70px;
        background: #211f35;
        z-index: 1;
    }
`
const Channels = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    width: 250px;
    background: #27223e;
    border-bottom-left-radius: 36px;
    z-index: 2;
    &::after {
        position: absolute;
        bottom: 0;
        right: -70px;
        content: "";
        width: 70px;
        height: 70px;
        background: #27223e;
        z-index: 1;
    }
    
    
`
const Head = styled.div `
    display: flex;
    background: #322d4b;
    width: 100%;
    height: 60px;
    padding: 10px;
    padding-right: 20px;
    padding-left: 20px;
    justify-content: space-between;
    border-top-left-radius: 8px;
    box-sizing: border-box;
    filter: drop-shadow(0 0 0.55rem #211f35);
    span,
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

const Hold = styled.section`
    display: flex;
    flex-direction: column;

    height: calc(100% - 60px);
    padding: 14px;

    span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: #6e58c3;
    }
    h1 {
        margin: 0;
        font-size: 1rem;
    }
    ul {
        color: #7a6bb2;
        display: flex;
        flex-direction: column;
        width: 100%;
        list-style-type: none;
        padding: 0;
        padding-left: 28px;
        gap: 12px;
        position: relative;
        box-sizing: border-box;
    }
`
const Channel = styled.span<{ isActive: boolean }>`
    position: relative;
    color: ${(props) => (props.isActive ? 'white' : 'inherit')}!important;

    &:before {
        font-family: 'Material Symbols Outlined';
        content: "\\e9ef";
        position: absolute;
        left: -28px;
        top: 0;
        bottom: 0;
        font-size: 20px;
    }
`
const Portal = styled.li`
    position: relative;
    &:before {
        font-family: 'Material Symbols Outlined';
        content: "\\e04b";
        position: absolute;
        left: -28px;
        top: 0;
        bottom: 0;
        font-size: 20px;
    }
`