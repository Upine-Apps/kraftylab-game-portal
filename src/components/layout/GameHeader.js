import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import MenuButton from "../buttons/MenuButton";
import { H2 } from "../styles/TextStyles";
import { gamePortalData } from "../../data/gamePortalData";
import Cookies from "universal-cookie";

export default function Header() {
  const cookies = new Cookies();
  const isAdmin = cookies.get("admin");
  const [adminGamePortalData, setAdminGamePortalData] = useState(
    gamePortalData
  );
  useEffect(() => {
    if (isAdmin == "true") {
      setAdminGamePortalData(
        gamePortalData.concat([
          {
            title: "Admin Portal",
            link: "/admin-portal/home",
            icon: "",
          },
        ])
      );
    }
  }, []);

  return (
    <Wrapper>
      <LinkWrapper>
        <Link to={"/game-portal"}>
          <img src="/images/logos/logo-black.svg" alt="Logo" />
        </Link>
      </LinkWrapper>
      <MenuWrapper count={adminGamePortalData.length}>
        {adminGamePortalData.map((item, index) => (
          <MenuButton item={item} key={index} onClick={item.onClick} />
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}

const LinkWrapper = styled.div`
  width: 150px;
  @media (max-width: 450px) {
    width: 44px;
  }
  img {
    height: 150px;
    width: 150px;
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
