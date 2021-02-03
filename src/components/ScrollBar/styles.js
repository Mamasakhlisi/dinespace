import styled from "styled-components";

export const StyledContainer = styled.div`
overflow-x:scroll;
${p => !p.isActive ? 'width:230px;' : "200px"};
transition:400ms;
::-webkit-scrollbar {
    height:0px;
}
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  width:200px;
`;
export const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Eina03W03-SemiBold";
  font-size: 14px;
  width:100px;
  height:30px;
  border-radius:4px;
  margin-left:10px;
  span {
      margin-left:8px;
  }
`;

export const StyledBar = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Eina03W03-SemiBold";
  font-size: 14px;
  width:100px;
  height:30px;
  border-radius:4px;
  margin:10px;
  background-color:#E6E9F7;
  transition:400ms;
  ${p => !p.isActive ? 'width:40px;' : ""};
  position:relative;
  span {
      margin-left:8px;
      ${p => !p.isActive ? 'display:none;' : ""};
  }
`

export const StyledWrapper = styled.div`
    width:280px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const StyledCounter = styled.span`
    position:absolute;
    top:-4px;
    right:-4px;
    width:18px;
    height:18px;
    border-radius:50%;
    background-color:#FC6C44;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    font-size:12px;
    ${p => !p.isActive ? "display:flex !important;": "display:none;"};
    
`