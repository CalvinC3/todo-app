import styled from "styled-components";

export const MainWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    max-height: 63vh;
    overflow-x: auto;
    width: 100%;
    padding: 10px;

    >* {
        margin: 10px 0px;
    }

    ::-webkit-scrollbar {
        display: none;
      }
`



