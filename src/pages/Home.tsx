import React from 'react'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Members from '../components/Members'

function Home() {
  return (
    <Container>
        <Sidebar />
        <Chat />
        <Members />
    </Container>
  )
}

export default Home

const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
`