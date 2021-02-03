import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 280px;
  margin:10px;
  border-radius:4px;
  ${(p) =>
    !p.activeDropdown
      ? `    border: 1px solid #eaeaea;
    box-shadow: 0px 0px 4px rgba(158, 158, 158, 0.25);`
      : ""}
`;

export const StyledFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
`;
