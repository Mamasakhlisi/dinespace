import styled from "styled-components";

export const StyledDropdown = styled.div`
  width:280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #eaeaea;
`;

export const StyledChoose = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:transparent;
  border:0;
  width:280px;
  cursor: pointer;
  ${p => p.activeDropdown ? `
    border: 1px solid #eaeaea;
    border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0px 0px 4px rgba(158, 158, 158, 0.25);
  ` : ''}
  span {
    padding: 12px;
    font-size: 14px;
    font-family: "Eina03W03-SemiBold";
  }
  &:focus {
      outline:none;
  }
`;
export const StyledListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #eaeaea;
  border-radius:4px;
  margin-top: 5px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 2px 4px rgba(158, 158, 158, 0.25);
`;

export const StyledList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #f5f5f5;
  list-style: none;
  width: 90%;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    span {
      color: #fc6c44;
    }
    svg path {
      fill: #fc6c44;
    }
  }

  svg path {
    transition: 300ms;
  }
  span {
    margin-left: 5px;
    font-family: "Eina03W03-SemiBold";
    font-size: 14px;
    transition: 300ms;
  }
`;

export const StyledTitle = styled.h6 `
  display:flex;
  justify-content:flex-start;
  align-items:center;
  color:#FC6C44;
  padding-left:12px;
  svg path {
    fill: #FC6C44;
  }
`

export const StyledLabel = styled.span`
  margin-left:-6px;
`