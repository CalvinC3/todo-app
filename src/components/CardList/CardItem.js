import styled from "styled-components"

const MainWrapper = styled.div`
    min-height: 120px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: white;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    color: black;
    border-radius: 8px;
`

export const CardItem = ({item}) => {

    return (
        <MainWrapper>
            <p>task: {item.title}</p>
            <p>description: {item.description}</p>
        </MainWrapper>
    )
}