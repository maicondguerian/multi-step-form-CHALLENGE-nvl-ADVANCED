import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "../Theme/Theme";
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
        outline: none;
    }
    body{
        background-color: ${props => props.theme.primaryLightThemeColors.Alabaster};
    
        input::-webkit-inner-spin-button,
        input::-webkit-outer-spin-button {
            display: none;
            margin: 0;
            -webkit-appearance: none;
        }

    input[type=number] {
      appearance: textfield;
    }
        
    }
`
export const Main = styled.main`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding:0.8em;
`

export const StyledFormWrapper = styled(Main)`
    background-color: ${props => props.theme.primaryLightThemeColors.bgColorLight};
    box-shadow: 0 2px 8px 0 rgba(99,99,99,.2);
    border-radius: 1rem;
    width: 940px;
    height: 600px;
    display: flex;
    align-items: center;
`
export const StyledLeftBar = styled.aside`
    background-image: url('../../public/bg-sidebar-desktop.svg');
    background-size: cover;
    border-radius:10px;
    min-width: 274px;
    height:100%;
    padding:2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${props => props.theme.primaryLightThemeColors.fColor};
`

export const StyledForm = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    align-items: center;
    gap: 1.3rem;
    margin-top: 2rem;
    width: 470px;

    button:last-child{
        align-self: flex-end;
        margin-top: 20%;
    }

    >div{
        width: 100%;
        margin-top: .2rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        position: relative;
    }

    h1{
        align-self: baseline;
        font-weight: 700;
        color: ${props => props.theme.primaryLightThemeColors.MarineBlue};
    }

    p{  
        margin-top: -.5rem;
        font-weight: 400;
        width: 100%;
        font-size: 16.5px;
        color:  ${props => props.theme.primaryLightThemeColors.CoolGray};
    }

    input{
        width: inherit;
        height: 50px;
        border-radius: 5px;
        border: solid 1px;
        border-color:  ${props => props.theme.primaryLightThemeColors.CoolGray};
        opacity: .6;
        font-size: 15px;
        padding: 0 1rem;
        background-color: ${props => props.theme.primaryLightThemeColors.bgColorLight};
       
        
        &::placeholder{
            font-size: 16.5px;
            font-weight: 500;
            color: ${props => props.theme.primaryLightThemeColors.softDark};
            
        }
    }

    label{
        color: ${props => props.theme.primaryLightThemeColors.MarineBlue};
        font-weight: 500;
    }
`

export const StyledBtn = styled.button`
    background-color: ${props => props.theme.primaryLightThemeColors.MarineLlue};
    color: ${props => props.theme.primaryLightThemeColors.fColor};
    border-radius: 7px;
    height: 47px;
    width: 120px;
    border: none; 
    font-size:17px;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.primaryLightThemeColors.hovered};
        transition: ease .2s;
    }
`
