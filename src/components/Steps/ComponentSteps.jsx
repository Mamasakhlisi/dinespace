import React from "react";
// components
import DateTime from "../Date&Time/DateTime";
import PersonDropdown from "../PersonDropdown/PersonDropdown";
// styles
import { StyledFlexBox } from "./ComponentStepsStyles";

// Dining options steps
const Steps = ({ activePersonDropdown, handlePersonDropdown, categoryId }) => {
  switch (categoryId) {
    case 1:
      return (
        <StyledFlexBox>
          <DateTime />
          <PersonDropdown
            handlePersonDropdown={handlePersonDropdown}
            activePersonDropdown={activePersonDropdown}
          />
        </StyledFlexBox>
      );
    case 2:
      return (
        <StyledFlexBox>
          <DateTime />
          <PersonDropdown
            handlePersonDropdown={handlePersonDropdown}
            activePersonDropdown={activePersonDropdown}
          />
        </StyledFlexBox>
      );
    case 3:
      return (
        <StyledFlexBox>
          <DateTime step={true} />
        </StyledFlexBox>
      );
  }
};

const ComponentSteps = ({
  categoryId,
  activePersonDropdown,
  handlePersonDropdown,
}) => {
  return (
    <div>
      <Steps
        categoryId={categoryId}
        handlePersonDropdown={handlePersonDropdown}
        activePersonDropdown={activePersonDropdown}
      />
    </div>
  );
};

export default ComponentSteps;
