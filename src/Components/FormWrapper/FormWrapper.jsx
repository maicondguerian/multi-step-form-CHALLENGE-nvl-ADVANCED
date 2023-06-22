import React from 'react'
import { StyledFormWrapper } from '../../GlobalStyles/GlobalStyles'

export const FormWrapper = ({children}) => {
  return (
    <StyledFormWrapper>
        {children}
    </StyledFormWrapper>
  )
}
