import styled from 'styled-components';

export const StyledContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:12px;
`

export const StyledInput = styled.input`
    border:0;
    width:100%;
    font-family: "Eina03-Regular";
    margin-left:6px;
    &::placeholder {
        font-size:14px;
        color:#8C8C8C;
        font-weight:400;    
        font-family: "Eina03-Regular";
    }
    &:focus {
        outline:none;
    }
`