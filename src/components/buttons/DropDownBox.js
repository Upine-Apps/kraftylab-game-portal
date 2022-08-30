import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import React from "react";

export default function DropDownBox(props) {
  const { options, selected, onChange } = props;

  return (
    <DropdownWrapper>
      <Dropdown
        options={options}
        onChange={(e) => onChange(e)}
        value={selected}
        placeholder="Select an option"
      />
    </DropdownWrapper>
  );
}
const DropdownWrapper = styled.div;
