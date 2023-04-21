
import { ThemeProvider } from "styled-components"
import { Container } from "./Components/AppContainer/Container"
import { MyContext } from "./Context/MyContext"
import {  GlobalStyles } from "./GlobalStyles/GlobalStyles"
import { Theme } from "./Theme/Theme"
import { FormWrapper } from "./Components/FormWrapper/FormWrapper"
import { StepsLeftBar } from "./Components/StepsLeft/StepsLeftBar"

function App() {
  return (
    <MyContext.Provider value={{}}>
      <ThemeProvider theme={Theme}>
        <Container>
        <GlobalStyles/>
        <FormWrapper>
          <StepsLeftBar />
        </FormWrapper>
      </Container>
      </ThemeProvider>
    </MyContext.Provider>
  )
}

export default App
