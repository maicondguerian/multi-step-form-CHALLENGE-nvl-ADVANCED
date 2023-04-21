import React from 'react'
import { StyledLeftBar } from '../../GlobalStyles/GlobalStyles'
import styled from 'styled-components'
import { Form } from '../FormWrapper/Form'

const StyledStep = styled.div`
    display: flex;
    gap: 1rem;
    text-transform: uppercase;

    span{
    background-color:${props => props.bgColor || 'hsl(206, 94%, 87%)'}; 
    border-radius:50%;
    height:40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border: ${props => props.border || 'solid 1px white'};
    color: ${props => props.theme.primaryLightThemeColors.fColorB};
    }

    ul{
        list-style: none;
    }
    
`

const Steps = ({step='', stepInfo, stepNumber, bgColor, border}) => {
    return (
        <StyledStep bgColor={bgColor} border={border}>
            <span>
                {step}
            </span>
            <ul>
                <li>{stepNumber}</li>
                <li>{stepInfo}</li>
            </ul>
        </StyledStep>
    )
}

export const StepsLeftBar = () => {
 
    return (
        <>
            <StyledLeftBar>
                <Steps stepInfo={'your info'} stepNumber={'step1'} step='1' border={'none'}/>
                <Steps bgColor='transparent' />
                <Steps bgColor='transparent'/>
                <Steps bgColor='transparent'/>
            </StyledLeftBar>
            <Form />
        </>
  )
}
