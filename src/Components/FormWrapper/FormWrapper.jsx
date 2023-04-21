import React from 'react'
import { StyledForm } from '../../GlobalStyles/GlobalStyles'

export const FormWrapper = ({children}) => {
  return (
    <StyledForm>
        {children}
    </StyledForm>
  )
}
