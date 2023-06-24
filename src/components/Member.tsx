import React from "react";
import styled, { css } from "styled-components";

export enum statusEm {
  ONLINE,
  DONOTDISTURB,
  OFFLINE,
}

interface MemberProps {
  displayName: string;
  userName: string;
  status: statusEm;
}

export const Member = ({ displayName, userName, status }: MemberProps) => {
  return (
    <Container status={status}>
      <img src="https://avatars.githubusercontent.com/u/60079016" />
      <div>
        <div className="info">
          <h1>{displayName}</h1>
          <span>@{userName}</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ status?: statusEm }>`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 12px;

  img {
    height: 52px;
    object-fit: cover;
  }

  &::after {
    position: absolute;
    content: "";
    width: 8px;
    height: 8px;
    right: 0;
    bottom: 35%;
    background: #e7aaac;
    border-radius: 9999px;
  }

  ${(props) =>
    props.status === statusEm.ONLINE &&
    css`
      &::after {
        background: #8ff98d;
      }
    `}

  ${(props) =>
    props.status === statusEm.DONOTDISTURB &&
    css`
      &::after {
        background: #e7aaac;
      }
    `}

  ${(props) =>
    props.status === statusEm.OFFLINE &&
    css`
      &::after {
        background: transparent;
      }
    `}
`;
