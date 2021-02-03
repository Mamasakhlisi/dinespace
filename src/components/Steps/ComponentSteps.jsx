import React from "react";
// components
import DateTime from "../Date&Time/DateTime";
import PersonDropdown from "../PersonDropdown/PersonDropdown";
// styles
import { StyledFlexBox } from "./ComponentStepsStyles";
const Steps = ({ category, categoryId }) => {
  switch (categoryId) {
    case 1:
      return (
        <StyledFlexBox>
          <DateTime />
          <PersonDropdown />
        </StyledFlexBox>
      );
    case 2:
      return (
        <StyledFlexBox>
          <DateTime />
          <PersonDropdown />
        </StyledFlexBox>
      );
    case 3:
      return         <StyledFlexBox>
      <DateTime step={true} />
    </StyledFlexBox>
    default:
      return <span>Default</span>;
      break;
  }
};

const ComponentSteps = ({ categoryId }) => {
  return (
    <div>
      <Steps categoryId={categoryId} />
    </div>
  );
};

export default ComponentSteps;
