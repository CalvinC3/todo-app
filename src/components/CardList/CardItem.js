import styled from "styled-components"

const MainWrapper = styled.div`
    min-height: 120px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: white;
    :hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    color: black;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    transition: all .2s;

    ::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }
    
`


const LeftSection = styled.div`
    flex-grow: 1;

`

const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    margin: 10px;
`

const MarkCompleteButton = styled.button`
    


`
const DeleteButton = styled.button`
    // width: 100%;
    // height: 100%;
    margin: 6px;
    background-color: red;
    border: none;
    border-radius: 10rem;
    display: inline-block;
    padding: .75rem 1.25rem;
    border-radius: 10rem;
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .15rem;
    transition: all .3s;
    position: relative;
    overflow: hidden;
    z-index: 1;



`

const StyledButton = styled.button`

	display: inline-block;
	padding: .75rem 1.25rem;
	border-radius: 10rem;
	color: #fff;
	text-transform: uppercase;
	font-size: 1rem;
	letter-spacing: .15rem;
	transition: all .3s;
	position: relative;
	overflow: hidden;
	z-index: 1;
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: $color;
		border-radius: 10rem;
		z-index: -2;
	}
	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 100%;
		background-color: darken($color, 15%);
		transition: all .3s;
		border-radius: 10rem;
		z-index: -1;
	}
	&:hover {
		color: #fff;
		&:before {
			width: 100%;
		}
	}

`

export const CardItem = ({ item }) => {

    return (
        <MainWrapper>
            <LeftSection>
                <p>task: {item.title}</p>
                <p>description: {item.description}</p>
            </LeftSection>
            <RightSection>
                {/* <MarkCompleteButton>C</MarkCompleteButton>
                <DeleteButton>D</DeleteButton> */}
                {/* <StyledButton>Hover me</StyledButton> */}
            </RightSection>

        </MainWrapper>
    )
}