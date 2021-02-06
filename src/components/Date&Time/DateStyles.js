import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  height: 205px; // fix dynamic height jump
`;

export const Th = styled.th`
  color: #5b6bc8;
  width:35px;
  height:35px;
  font-size: 12px;
  font-family: "Eina03W03-SemiBold";
  text-align:center;
`;

export const Td = styled.td`
  line-height: 1em;
  width:35px;
  height:35px;
  border-radius:100%;
  color: #000;
  position: relative;
  text-align:center;
  cursor:pointer;
  font-family: "Eina03W03-SemiBold";
  color: ${(p) => (p.current ? "#5b6bc8" : "#000")};
  position: relative;
  ${(p) =>
    p.active &&
    `
    background: #5b6bc8;
    color: #fff;
  `}
  &[data-current="false"] {
    color: #ebebec;
  }
  &[data-past="true"] {
    color: #ebebec;
  }
`;