import React, { useState } from "react";
// assets
import { ReactComponent as PizzaSvg } from "assets/svg/pizza.svg";
import { ReactComponent as ChickenSvg } from "assets/svg/chicken.svg";
import { ReactComponent as BurgerSvg } from "assets/svg/burger.svg";
import { ReactComponent as BarsSvg } from "assets/svg/bars.svg";

//styles
import {
  StyledWrapper,
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledBar,
  StyledCounter,
} from "./styles";

const scrollItemList = [
  { id: 1, icon: <PizzaSvg />, label: "Pizza" },
  { id: 2, icon: <ChickenSvg />, label: "Chicken" },
  { id: 3, icon: <BurgerSvg />, label: "Burger" },
];

const ScrollBar = () => {
  const [scrollActive, setScrollActive] = useState(true);

  const onScroll = (e) => {
    e.target.scrollLeft === 0 ? setScrollActive(true) : setScrollActive(false);
  };
  return (
    <StyledWrapper>
      <StyledBar isActive={scrollActive}>
        <BarsSvg /> <span>{scrollActive ? "Filter" : ""}</span>
        <StyledCounter isActive={scrollActive}>
          {scrollItemList.length}
        </StyledCounter>
      </StyledBar>
      <StyledContainer onScroll={onScroll} isActive={scrollActive}>
        <StyledList>
          {scrollItemList.map((item) => (
            <StyledListItem key={item.id}>
              {item.icon} <span> {item.label}</span>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default ScrollBar;
