import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import GlobalStyle from "./globalStyles";
import { StyledContainer, StyledFlexBox } from "./AppStyles";

// components
import Dropdown from "components/Dropdown/Dropdown";
import DateTime from "components/Date&Time/DateTime";
import PersonDropdown from "components/PersonDropdown/PersonDropdown";
import SearchBox from "components/SearchBox/SearchBox";
import ScrollBar from "components/ScrollBar/ScrollBar";
import GroupSize from "components/PersonDropdown/GroupSize";
import ComponentSteps from "components/Steps/ComponentSteps";

// actions
import { setcategory, resetcategory } from "redux/actions/categoryAction";
import {
  activePersonDropdownAction,
  deactivePersonDropdownAction,
} from "redux/actions/activePersonDropdownAction";
import {
  activeDropdownAction,
  deactiveDropdownAction,
} from "redux/actions/activeDropdownAction";

function App() {
  const dispatch = useDispatch();
  // Menu category
  const category = useSelector((category) => category.categoryReducer.item);
  // Person Dropdown Active
  const activePersonDropdown = useSelector(
    (state) => state.activePersonDropdownReducer.active
  );
  // Dropdown Active
  const activeDropdown = useSelector(
    (state) => state.activeDropdownReducer.active
  );

  // Options dropdown
  const handleDropdown = () => {
    dispatch(activeDropdownAction());
    dispatch(deactivePersonDropdownAction());
  };

  // Person dropdown
  const handlePersonDropdown = () => {
    dispatch(activePersonDropdownAction(!activePersonDropdown));
  };

  // Set category
  const handleCategory = (item) => {
    item.id === 0 ? dispatch(resetcategory()) : dispatch(setcategory(item));
    dispatch(deactiveDropdownAction());
  };

  return (
    <div className="App">
      <GlobalStyle />
      <StyledContainer activeDropdown={activeDropdown}>
        <Dropdown
          activeDropdown={activeDropdown}
          handleDropdown={handleDropdown}
          handleCategory={handleCategory}
          category={category}
        />
        {!activeDropdown && (
          <div>
            {category ? (
              <ComponentSteps
                categoryId={category && category.id}
                handlePersonDropdown={handlePersonDropdown}
                activePersonDropdown={activePersonDropdown}
              />
            ) : (
              <StyledFlexBox>
                <DateTime step="false" />
                <PersonDropdown
                  handlePersonDropdown={handlePersonDropdown}
                  activePersonDropdown={activePersonDropdown}
                />
              </StyledFlexBox>
            )}
            {!activePersonDropdown && <SearchBox />}
          </div>
        )}
      </StyledContainer>
      {activePersonDropdown ? <GroupSize /> : <ScrollBar />}
    </div>
  );
}

export default App;
