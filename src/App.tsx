
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import { CyclesProvider } from "./Contexts/CycleContext"

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CyclesProvider>
                    <Router />
                </CyclesProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
