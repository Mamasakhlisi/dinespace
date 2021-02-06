import styled from 'styled-components'


export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 20px;
  scrollbar-width: thin;
  scrollbar-color: #fc6c44 #fff;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fc6c44;
    border-radius: 20px;
    border: 3px solid #fff;
  }
`;
export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  max-height: 124px;
  li {
    font-family: "Eina03W03-SemiBold";
    &:nth-of-type(1) {
      padding: 20px 0;
    }

    &:nth-of-type(9) {
      padding: 20px 0;
    }
    &:last-child  {
      padding-bottom: 30px;
    }
  }
`;

export const Li = styled.li`
  // border: 1px solid red;
  padding: 10px;
  color: #ebebec;
  ${(p) => p.active && "color: black;"}
  font-family: "Eina03W03-SemiBold";
`;

export const Frame = styled.div`
  position: fixed;
  border-top: 2px solid #5b6bc8;
  border-bottom: 2px solid #5b6bc8;
  padding: 20px;
  max-width: 50%;
  width: 100%;
`;