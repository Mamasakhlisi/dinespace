import React from "react";
// assets
import { ReactComponent as ArrowDown } from "assets/svg/arrowdown.svg";
import { ReactComponent as ArrowUp } from "assets/svg/arrowup.svg";
import { ReactComponent as DineOutSvg } from "assets/svg/dineout.svg";
import { ReactComponent as ReservationSvg } from "assets/svg/reservation.svg";
import { ReactComponent as PickUpSvg } from "assets/svg/pickup.svg";
// styles
import {
  StyledDropdown,
  StyledChoose,
  StyledListContainer,
  StyledList,
  StyledTitle,
  StyledLabel,
} from "./styles";

// Dropdown list
const dropdownList = [
  { id: 1, label: "Dine Out", icon: <DineOutSvg /> },
  { id: 2, label: "Reservation", icon: <ReservationSvg /> },
  { id: 3, label: "Pick Up", icon: <PickUpSvg /> },
  { id: 0, label: "Any" },
];

const Dropdown = ({
  handleDropdown,
  activeDropdown,
  handleCategory,
  category,
}) => {
  return (
    <StyledDropdown>
      <StyledChoose onClick={handleDropdown} activeDropdown={activeDropdown}>
        {category ? (
          <StyledTitle>
            {category.icon} <StyledLabel>{category.label}</StyledLabel>
          </StyledTitle>
        ) : (
          <span>Dining Option</span>
        )}
        {activeDropdown ? <ArrowUp /> : <ArrowDown />}
      </StyledChoose>
      {activeDropdown && (
        <StyledListContainer>
          {dropdownList.map((item) => (
            <StyledList key={item.id} onClick={() => handleCategory(item)}>
              {item.icon} <span>{item.label}</span>
            </StyledList>
          ))}
        </StyledListContainer>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
