import React from "react";
// React Redux
import { useDispatch,useSelector } from "react-redux";

// action
import {increment,decrement} from 'redux/actions/groupSizeAction'

// assets
import {ReactComponent as PlusSvg} from 'assets/svg/plus.svg';
import {ReactComponent as MinusSvg} from 'assets/svg/minus.svg';
import {ReactComponent as PersonSvg} from 'assets/svg/person.svg';

// styles
import {
  StyledContainer,
  StyledButtonDecrement,
  StyledButtonIncrement,
  StyledCounterContainer,
  StyledTitle,
} from "./GroupSizeStyles";

const GroupSize = () => {
  const counter = useSelector((state) => state)
  const dispatch = useDispatch();

  // Group size increment +1
  const handleIncrement = () => {
    dispatch(increment())
  }
  // Group size decrement -1
  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <StyledContainer>
      <StyledTitle>
        <span><PersonSvg /> Group Size</span>
      </StyledTitle>
      <StyledCounterContainer>
        <StyledButtonDecrement onClick={handleDecrement}><MinusSvg/></StyledButtonDecrement>
        <span>{counter}</span>
        <StyledButtonIncrement onClick={handleIncrement}><PlusSvg /></StyledButtonIncrement>
      </StyledCounterContainer>
    </StyledContainer>
  );
};

export default GroupSize;
