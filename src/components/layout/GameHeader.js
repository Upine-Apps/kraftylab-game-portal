import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import MenuButton from "../buttons/MenuButton";
import { H2 } from "../styles/TextStyles";
import { gamePortalData } from "../../data/gamePortalData";

export default function Header() {
  return (
    <Wrapper>
      <LinkWrapper>
        <Link to="/">
          <Title>Krafty Lab Games </Title>
        </Link>
      </LinkWrapper>
      <MenuWrapper count={gamePortalData.length}>
        {gamePortalData.map((item, index) => (
          <MenuButton item={item} key={index} />
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}

const LinkWrapper = styled.div`
  @media (max-width: 450px) {
    width: 44px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 500px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
    grid-template-columns: 100px auto;
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);
`;

const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  } ;
`;
const Title = styled(H2)`
  color: black;
  opacity: 0.8;
`;
