import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 278px;
  height: 84px;
  max-width: 281px;

  margin: 11px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(158, 158, 158, 0.25);
  border: 1px solid #eaeaea;
  span {
    font-family: "Eina03W03-SemiBold";
    font-size: 14px;
  }
  button {
    font-family: "Eina03W03-SemiBold";
    font-size: 14px;
  }
`;

export const StyledTitle = styled.div`
      margin:10px;
`

export const StyledCounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px;
  span {
      padding-right:10px;
      padding-left:10px;
  }
`;

export const StyledButtonDecrement = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  border:1px solid #000000;
  cursor:pointer;
  &:focus {
      outline:none;
  }
`;

export const StyledButtonIncrement = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  border:1px solid #000000;
  cursor:pointer;
  &:focus {
      outline:none;
  }
`;
