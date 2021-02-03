import React, { useState } from "react";
// styles
import GlobalStyle from "./globalStyles";
import { StyledContainer, StyledFlexBox } from "./AppStyles";

//components
import Dropdwon from "./components/Dropdown/Dropdown";
import DateTime from "./components/Date&Time/DateTime";
import PersonDropdown from "./components/PersonDropdown/PersonDropdown";
import SearchBox from "./components/SearchBox/SearchBox";
import ScrollBar from "./components/ScrollBar/ScrollBar";
import GroupSize from "./components/PersonDropdown/GroupSize";
import ComponentSteps from "./components/Steps/ComponentSteps";

function App() {
  const [category, setCategory] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activePersonDropdown, setActivePersonDropdown] = useState(false);

  // Options dropdown
  const handleDropdown = () => {
    setActiveDropdown(!activeDropdown);
    setActivePersonDropdown(false);
  };

  // Person dropdown
  const handlePersonDropdown = () => {
    setActivePersonDropdown(!activePersonDropdown);
  };

  // Set category 
  const handleCategory = (item) => {
    item.id === 0 ? setCategory(null) : setCategory(item);
    setActiveDropdown(false);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <StyledContainer activeDropdown={activeDropdown}>
        <Dropdwon
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
                <DateTime />
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
