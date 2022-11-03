import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    height: 18vh;
    width: 50%;
    background: ${props => props.theme === 'dark' ? "#353940" : "#ededed"};
    padding: 10px;
    border-radius: 18px;
`

export const InputWrapper = styled.div `
    display: block;
    width: 100%;
    height: 30px;
    text-align: justify;


    input {
        width: 98%;
        height: 2rem;
        border-radius: 10px;
        border: none;
        margin-bottom: 8px;
        padding: 6px;
    }

    textarea {
        width:98%;
        max-width:98%;
        min-width:98%;
        max-height: 3.5rem;
        border-radius: 10px;
        border: none;
        padding: 6px;
    }
`

export const SubmitButton = styled.button`
    width: 100%;
    min-height: 38px;
    background: #6795b1f2;
    border-radius: 8px;
    border: none;
    margin-top: 10px;

    :hover {
        background: #2c719bf2;
    }

`