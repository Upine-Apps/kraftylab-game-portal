import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
export default function MenuButton(props) {
  const { item } = props;
  return (
    <Link to={item.link} onClick={props.onClick}>
      <Wrapper>
        <Icon></Icon>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  display: grid;
  background-color: #ffffff;
  border: 1px solid #e8ecf4;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;
