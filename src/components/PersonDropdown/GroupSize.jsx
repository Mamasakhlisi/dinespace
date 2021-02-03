import React from "react";
// assets
import {ReactComponent as PlusSvg} from '../../assets/svg/plus.svg';
import {ReactComponent as MinusSvg} from '../../assets/svg/minus.svg';
import {ReactComponent as PersonSvg} from '../../assets/svg/person.svg';

// styles
import {
  StyledContainer,
  StyledButtonDecrement,
  StyledButtonIncrement,
  StyledCounterContainer,
  StyledTitle,
} from "./GroupSizeStyles";

const GroupSize = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        <span><PersonSvg /> Group Size</span>
      </StyledTitle>
      <StyledCounterContainer>
        <StyledButtonDecrement><MinusSvg/></StyledButtonDecrement>
        <span>0</span>
        <StyledButtonIncrement><PlusSvg /></StyledButtonIncrement>
      </StyledCounterContainer>
    </StyledContainer>
  );
};

export default GroupSize;
