import styled from "styled-components";


export const Btn = styled.button`
    width: 150px;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #3b8a68;
    color: #000;
        &:hover,
        &:focus {
            background-color: #6affcc;
            color: #000;
        }
`;