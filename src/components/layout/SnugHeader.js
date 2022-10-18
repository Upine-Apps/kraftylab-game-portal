import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { snugMenuData } from "../../data/menuData";
import MenuButton from "../buttons/MenuButton";
import SnugMenuTooltip from "../tooltips/SnugMenuTooltip";
import { useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  const tooltipRef = useRef();

  function handleClick(event) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <LinkWrapper>
        <Link to="/">
          <img src="/images/logos/dark-logo-notext.svg" alt="Logo" />
        </Link>
      </LinkWrapper>
      <MenuWrapper count={snugMenuData.length} ref={ref}>
        {snugMenuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              onClick={(event) => handleClick(event)}
              item={item}
              key={index}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={(event) => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <SnugMenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  );
}

const LinkWrapper = styled.div`
  width: 75px;
  @media (max-width: 450px) {
    width: 44px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
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
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  } ;
`;
