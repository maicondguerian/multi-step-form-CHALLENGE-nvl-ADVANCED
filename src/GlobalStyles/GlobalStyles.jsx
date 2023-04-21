import styled, { createGlobalStyle } from "styled-components";
import img from '../../public/bg-sidebar-desktop.svg'
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace;
    }
    body{
        background-color: ${props => props.theme.primaryLightThemeColors.Alabaster};
    }
`

export const Main = styled.main`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding:1em;
`

export const StyledForm = styled(Main)`
    background-color: ${props => props.theme.primaryLightThemeColors.bgColorLight};
    box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
    border-radius: 1rem;
    width: 940px;
    height: 600px;
    display: flex;
    ;
`
export const StyledLeftBar = styled.aside`
    background-image: url('../../public/bg-sidebar-desktop.svg');
    background-repeat: no-repeat;
    width: 274px;
    height:100%;
    padding:2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${props => props.theme.primaryLightThemeColors.fColor};
`