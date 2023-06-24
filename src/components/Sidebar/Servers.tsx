import React from 'react'
import styled from 'styled-components'

import { MoreVert, TrendingUp, TrendingUpOutlined, Email, EmailOutlined, HolidayVillage, HolidayVillageOutlined, PeopleAlt, PeopleAltOutlined, Search, SearchOutlined, Phone, Add } from '@mui/icons-material';

function Servers() {
  return (
    <Container>
        <div>
            <ul>
            <button>
                <Add />
            </button>
            <li><span>BD</span></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            <li><TrendingUp/></li>
            
            </ul>
        </div>
    </Container>
  )
}

export default Servers

const Container = styled.div`
    display: flex;
    /* width: 35%; */
    width: 80px;
    background: #211f35;
    border-bottom-left-radius: 36px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    z-index: 2;

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    div {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;

        ul {
            display: flex;
            flex-direction: column;
            width: 100%;
            list-style-type: none;
            align-items: center;
            padding: 0;
            gap: 12px;

            button {
                width: 100%;
                height: 40px;
                appearance: none;
                border: 2px solid transparent;
                margin-bottom: 14px;

                background: #322d4b;
                border-radius: 10px;
                color: #8273be;
                
                position: relative;
                &:after {
                    position: absolute;
                    content: "";
                    background: #322d4b;
                    bottom: -18px;
                    left: 0;
                    right: 0;
                    width: 100%;
                    height: 3px;
                    border-radius: 4px;
                }
            }
            
            li {
                display: flex;
                height: 42px;
                width: 100%;
                padding: 4px;
                text-align: center;
                align-items: center;
                border-radius: 16px;
                background: #322d4b;

                span {
                    color: #8982b4;
                    margin: auto;
                    font-size: 18px;
                }
            }
            svg {
                height: 2rem;
                margin: auto;
                opacity: 0.6;
            }
            img {
                display: flex;
                height: 42px;
                object-fit: cover;
                border-radius: 8px;
                margin: 0 auto;
            }
        }
    }
`