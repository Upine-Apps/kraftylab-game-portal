import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import React from "react";
import styled from "styled-components";

export default function DropDownBox(props) {
  const { options, selected, onChange } = props;

  return (
    <DropdownWrapper>
      <Dropdown
        options={options}
        onChange={(e) => onChange(e)}
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
    background-color: blue;
    color: white;
    border-radius: 10px 10px 10px 10px;
  }
  .placeholder-class {
  }
  .dropdown-class {
    background-color: red;
    border-radius: 25px;
  }
  .menu-class {
    border-radius: 0 0 10px 10px;
  }
`;
