import React from "react";
//assets
import { ReactComponent as SearchSvg } from "assets/svg/search.svg";
//styles
import { StyledContainer, StyledInput } from "./SearchBoxStyles";

const SearchBox = () => {
  return (
    <StyledContainer>
      <SearchSvg />
      <StyledInput placeholder="Search Restaurant or Category" />
    </StyledContainer>
  );
};

export default SearchBox;
