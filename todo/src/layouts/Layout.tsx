import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { GlobalStyle } from "../styles/GlobalStyle"
import { themes } from "../styles/themes"
import { ThemeProvider } from "styled-components"

export const Layout = () => {
    return (
        <>
            <ThemeProvider theme={themes['light']}>
                <GlobalStyle />
                <Header />
                <Outlet />
            </ThemeProvider>

        </>
    )
}