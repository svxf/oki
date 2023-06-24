import React from "react";
import styled from "styled-components";
import { Member, statusEm } from "./Member";

function Members() {
  return (
    <Container>
      <Head>
        <h1>Members</h1>
        <div>
          <span>2</span>
          <p>1</p>
        </div>
      </Head>
      <Contents>

        {/* online */}

        <Header>
          <h1>Online</h1>
          <span>2</span>
        </Header>

        <MembersBody id="online-members">

          <Member
            displayName="birb"
            userName="svxf"
            status={statusEm.ONLINE}
          />

          <Member
            displayName="a rando"
            userName="stranger"
            status={statusEm.DONOTDISTURB}
          />

        </MembersBody>

        {/* offline */}

        <Header>
          <h1>Offline</h1>
          <span>1</span>
        </Header>

        <MembersBody id="offline-members" offline>

          <Member
            displayName="steve"
            userName="steve"
            status={statusEm.OFFLINE}
          />

        </MembersBody>

      </Contents>
    </Container>
  );
}

export default Members;

const Contents = styled.div`
  flex-direction: column !important;
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  color: #7f75b9;
`;

const Header = styled.div`
  justify-content: space-between;
`;
const MembersBody = styled.div<{ offline?: boolean }>`
  opacity: ${(props) => (props.offline ? "0.6" : "1")};
  display: flex;
  flex-direction: column !important;
  text-decoration: none;
  margin-bottom: 8px;

  ul,
  ol {
    padding: 0;
    list-style-type: none;
  }

  div {
    width: 100%;
    box-sizing: border-box;
  }
  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
    color: white;
    width: 100%;

    h1,
    span {
      margin-top: 0px;
      margin-bottom: 0px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 150px;
    }
    span {
      color: #7e70b9;
    }
  }
`;
// const Member = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     padding-top: 12px;

//     img {
//         height: 52px;
//         object-fit: cover;
//     }
// `
//

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100%;
  background: #27223e;

  div {
    display: flex;
    flex-direction: row;
    /* padding: 4px; */
  }
  /* .online {
        display: flex;
        flex-direction: row;
        padding: 10px;
        padding-right: 20px;
        padding-left: 20px;
        color: #7f75b9;
    } */
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
`;

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
    span,
    p {
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
`;
