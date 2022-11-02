import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../app/ThemeContext'

const StyledContainer = styled.div`
    width: 100%;
    justify-content: center;
    text-align: end;
`

const StyledButton = styled.button`
    width: 200px;
    height: 30px;

`

const ThemeSelector = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const toggleThemeText = () => theme === "dark" ? "Light Mode" : "Dark Mode"
    const toggleTheme = () => setTheme(
        theme === "dark" ? "light" : "dark"
    )


    return (
        <StyledContainer>
            <StyledButton onClick={toggleTheme}>
                Change Theme to {toggleThemeText()}
            </StyledButton>
        </StyledContainer>
    )
}

export default ThemeSelector