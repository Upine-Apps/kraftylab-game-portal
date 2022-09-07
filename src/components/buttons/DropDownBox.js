import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function DropDownBox(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [bord, setBord] = useState("10px 10px 10px 10px");
  const { options, selected, onChange } = props;

  const handleOnChange = (e) => {
    setIsOpen(!isOpen);
    onChange(e);
  };

  return (
    <DropdownWrapper onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <Dropdown
        options={options}
        onChange={(e) => handleOnChange(e)}
        value={selected}
        placeholder="Select an option"
        className="dropdown-class"
        menuClassName="menu-class"
        placeholderClassName="placeholder-class"
        controlClassName="control-class"
      />
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  padding: 10px;

  .control-class {
    background-color: white;
    border: 1px solid gray;

    border-radius: 10px;
    text-align: start;
    padding: 20px 0 20px 10px;

    font-size: 24px;
    /* border-radius: ${(props) =>
      props.isOpen ? "10px 10px 0 0" : "10px"}; */
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
  }
  .placeholder-class {
  }
  .dropdown-class {
    /* margin-top: 25px; */
    background-color: red;
    border-radius: 25px;
  }
  .menu-class {
    margin-top: 25px;
    border-radius: 10px;
    text-align: start;
    font-size: 24px;
    /* outline: 1px solid white; */
    border: 0px;

    ::-webkit-scrollbar-thumb {
      border-radius: 20px; /* roundness of the scroll thumb */
    }
    scrollbar-width: thin;
  }
`;
