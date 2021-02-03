import React from "react";
// React Redux
import { useSelector } from "react-redux";

// assets
import { ReactComponent as ArrowDown } from "../../assets/svg/arrowdown.svg";
import { ReactComponent as ArrowUp } from "../../assets/svg/arrowup.svg";
import { ReactComponent as PersonSvg } from "../../assets/svg/person.svg";
// styles
import { StyledChoose } from "./PersonDropdownStyles";

const PersonDropdown = ({ activePersonDropdown, handlePersonDropdown }) => {
  // Group size
  const counter = useSelector((state) => state);
  return (
    <div>
      <StyledChoose onClick={handlePersonDropdown}>
        <span>
          <PersonSvg /> {counter !== 0 ? `${counter} People` : "Person"}
        </span>
        {activePersonDropdown ? <ArrowUp /> : <ArrowDown />}
      </StyledChoose>
    </div>
  );
};

export default PersonDropdown;
