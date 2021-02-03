import React from "react";
// assets
import { ReactComponent as ArrowDown } from "../../assets/svg/arrowdown.svg";
import { ReactComponent as ArrowUp } from "../../assets/svg/arrowup.svg";
import { ReactComponent as PersonSvg } from "../../assets/svg/person.svg";
// styles
import { StyledChoose } from "./PersonDropdownStyles";

const PersonDropdown = ({ activePersonDropdown, handlePersonDropdown }) => {
  return (
    <div>
      <StyledChoose onClick={handlePersonDropdown}>
        <span>
          <PersonSvg /> Person
        </span>
        {activePersonDropdown ? <ArrowUp /> : <ArrowDown />}
      </StyledChoose>
    </div>
  );
};

export default PersonDropdown;
