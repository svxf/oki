import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link, useLocation } from "react-router-dom";

import { TrendingUp, TrendingUpOutlined, Email, EmailOutlined, HolidayVillage, HolidayVillageOutlined, PeopleAlt, PeopleAltOutlined, Search, SearchOutlined, Phone, Add } from '@mui/icons-material';

interface NavOption {
    path: string;
    iconActive: JSX.Element;
    iconInactive: JSX.Element;
    text: string;
    isImportant: boolean;
}

const navOptions: NavOption[] = [
    {
        path: "/stats",
        iconActive: <TrendingUp />,
        iconInactive: <TrendingUpOutlined />,
        text: "Stats",
        isImportant: true,
      },
      {
        path: "/messages",
        iconActive: <Email />,
        iconInactive: <EmailOutlined />,
        text: "Messages",
        isImportant: true,
      },
      {
        path: "/servers",
        iconActive: <HolidayVillage />,
        iconInactive: <HolidayVillageOutlined />,
        text: "Servers",
        isImportant: true,
      },
      {
        path: "/friends",
        iconActive: <PeopleAlt />,
        iconInactive: <PeopleAltOutlined />,
        text: "Friends",
        isImportant: true,
      },
      {
        path: "/search",
        iconActive: <Search />,
        iconInactive: <SearchOutlined />,
        text: "Search",
        isImportant: true,
      },
  ];


function Directory() {
    const [isNavOptionHovered, setIsNavOptionHovered] = useState(false);
    const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
    const [activePage, setActivePage] = useState("");
    const location = useLocation();

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);

    const handleNavOptionsHover = (hovered: boolean) => {
        setIsNavOptionHovered(hovered);
    };
    const handleNavOptionHover = (index: number) => {
        setActiveOptionIndex(index);
    };

    const getIcon = (option: NavOption, index: number) => {
        const isActive = activePage === option.path;
        const isHovered = activeOptionIndex === index;
        const showActiveIcon = isActive || isHovered;
      
        if (showActiveIcon) {
          return option.iconActive;
        } else {
          return option.iconInactive;
        }
    };

  return (
    <>
        <NavShadow className={isNavOptionHovered ? "active" : ""} />
        <Container
        onMouseOver={() => handleNavOptionsHover(true)}
        onMouseOut={() => handleNavOptionsHover(false)}>
            <div>
                <img src='https://hiven.io/static/media/logo.f7ff647e.svg' />
            </div>
            <ul>
                {navOptions.map((option, index) => (
                <a
                    key={index}
                    href={option.path}
                    // to={option.path}
                    onClick={() => setActivePage(option.path)}
                >
                    <li
                    style={{ opacity: activePage === option.path ? "1" : "" }}
                    className={option.isImportant ? "active" : ""}
                    onMouseOver={() => handleNavOptionHover(index)}
                    >
                    {getIcon(option, index)}
                    <NavTextHid />
                    <NavText
                        style={{ transitionDuration: `${index * 50 + 100}ms` }}
                        className={isNavOptionHovered ? "navTextActive" : ""}
                    >
                        {option.text}
                    </NavText>
                    </li>
                </a>
                ))}
            </ul>
            <ul>
                <li><Phone style={{ opacity: '1', color: '#ea5d58', height: '32px', width: '32px' }} /></li>
                <li><img src='https://avatars.githubusercontent.com/u/60079016'/></li>
            </ul>
        </Container>
    </>
  )
}

export default Directory

const Container = styled.div`
    z-index: 6;
    position: relative;
    display: flex;
    flex-direction: column;
    /* width: 30%; */
    width: 80px;
    background: #1b1a2c;
    justify-content: space-between;

    
    
    padding-top: 20px;
    .navTextActive {
        color: white;
        opacity: 1;
        margin-left: 4rem;
    }
    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        img {
            height: 42px;
        }
    }
    ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        list-style-type: none;
        align-items: center;
        padding: 0;
        a {
            text-decoration: none;
            color: white;
            width: 100%;
        }
        
        li {
            display: flex;
            height: 64px;
            width: 100%;
            text-align: center;
            align-items: center;
            position: relative;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            &:hover {
                opacity: 1;
                transform: translateX(5px) scale(1.1) translateZ(0px);
            }
            
            &:active {
                transform: scale(0.95);
            }
        }
        svg {
            z-index: 5;

            height: 2rem;
            margin: auto;
            opacity: 1;
            color: #8273be;
        }
        img {
            display: flex;
            height: 42px;
            object-fit: cover;
            border-radius: 8px;
            margin: 0 auto;
        }
    }
`
const NavShadow = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to right, #1b1a2c, rgba(16, 17, 21, 0));
  opacity: 0;
  z-index: 3;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  pointer-events: none;

  &.active {
    opacity: 1;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
const NavTextHid = styled.div`
  z-index: 4;
  background: #1b1a2c;
  width: 65%;
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavText = styled.span`
  opacity: 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  align-items: center;
  left: 0;
  z-index: 3;
  position: absolute;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

  @media (max-width: 640px) {
    display: none;
  }
`;