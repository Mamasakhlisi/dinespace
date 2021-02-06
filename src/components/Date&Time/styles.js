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
    padding: 4px;
  }
`;


export const DateTimeFrom = styled.div`
  padding: 12px;
  border-radius: 5px;
  // font-size: 0.8em;
  cursor: pointer;
  font-family: "Eina03W03-SemiBold";
  font-size:14px;
`;

export const Calendar = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 5px;
  top: 5px;
  left: 5px;
  transform: translate(0%, 0%);
  z-index:1111;
  box-shadow: 0px 2px 4px rgba(158, 158, 158, 0.25);
`;

export const Header = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    font-size: 1.1em;
    font-family: "Eina03W03-SemiBold";
    
  }
  svg {
    cursor:pointer;
  }
`;

export const Controll = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-family: "Eina03W03-SemiBold";
    margin: 0 5px;
    cursor: pointer;
    color: rgb(155, 155, 155);
  }
`;

export const Buttons = styled.div`
  padding: 20px;
  min-height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #ebebec;

  button {
    border: none;
    color: #fff;
    background: #fc6c44;
    padding: 10px 30px;
    border-radius: 4px;
    cursor: pointer;
    font-family: "Eina03W03-SemiBold";
    &:focus {
      outline: 0;
      border: none;
    }
  }
  span {
    text-decoration: underline;
    cursor: pointer;
    font-family: "Eina03W03-SemiBold";
  }
`;

export const TimeContainer = styled.div`
  text-align: center;
  h3 {
    font-size:17px;
    margin: 0;
    color: #fb6b44;
    font-family: "Eina03W03-SemiBold";
  }
`;

export const StyledControllDate = styled.span`
  color:#fb6b44 !important;
`