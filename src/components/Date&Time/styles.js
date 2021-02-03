import styled from "styled-components";

export const StyledContainer = styled.div`
  ${p => p.step ? "width:100%": "140px"};
  ${p => p.step && "height:43px"};
  display:flex;
  justify-content:flex-start;
  align-items:center;
  span {
    font-family: "Eina03W03-SemiBold";
    font-size: 14px;
    padding: 12px;
  }
`;
