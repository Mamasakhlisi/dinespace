import styled from "styled-components";

export const StyledChoose = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: 0;
  width: 140px;
  border-left: 1px solid #eaeaea;
  cursor: pointer;
  ${(p) =>
    p.activeDropdown
      ? `
    border: 1px solid #eaeaea;
    border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0px 2px 4px rgba(158, 158, 158, 0.25);
  `
      : ""}
  span {
    padding: 12px;
    font-size: 14px;
    font-family: "Eina03W03-SemiBold";
  }
  &:focus {
    outline: none;
  }
`;
